import knex from '../../knex/knex'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import uuidv4 from 'uuid/v4'
import { pubsub } from "../index";

const MESSAGE_CREATED = "MESSAGE_CREATED";
export const resolvers = {
    Mutation: {
      login: async (parent, { email, password }, context) => {
        try {
          let viewer = await knex("users").where("email", email);

          viewer = viewer[0];

          if (!viewer) {
            throw new Error("No viewer found");
          }
          
          const valid = await bcrypt.compare(password, viewer.password);

          if (!valid) {
            throw new Error("Invalid password");
          }

          const token = jwt.sign({ id: viewer.id }, "frindle");
          let roles = await knex('roles').where("user_id", viewer.id)
          viewer.roles = roles
          viewer.token = token;

          return viewer;
        } catch (error) {
          throw new Error(error);
        }
      },
      saveTodo: async (parent, args, context) => {
        if (!context.viewer) return
        
        try {
          const { completed, task, audition_id } = args
          const id = uuidv4()

            const saveTodo = await knex('todos')
            .returning(['id', 'audition_id', 'task', 'completed'])
            .insert({ id, completed, task, audition_id }).then(r => r[0])

            return saveTodo
        } catch(error) {
          console.log(error)
        }
      },
      updateTodo: async (parent, args, context) => {
        if (!context.viewer) return;

        try {
            const { id, task, completed } = args;
            
              const updatedTodo = await knex('todos')
                .where({ id })
                .update({
                  task,
                  completed
                }).returning(['id', 'audition_id', 'task', 'completed']).then(r => r[0])
                  
                return updatedTodo
              
        } catch (error) {
          console.log(error);
        }
      },
      createMessage: async (_, {text, audition_id, user_id, first_name, last_name}) => {

        const id = uuidv4()
        const message = await knex('messages')
          .returning(['id', 'text', 'audition_id', 'user_id', 'first_name', 'last_name'])
          .insert({id, text, audition_id, user_id, first_name, last_name}).then(r => r[0])

          await pubsub.publish(MESSAGE_CREATED, { messageCreated: message })
          return message
        },
      updateActualStartOrEnd: async (parent, {id, actual_start, actual_end}) => {
        let appointment;

        if (actual_start){
          appointment = await knex("appointments")
            .where("id", "=", id)
            .update({
              actual_start
            })
            .returning(['id', 'actual_start', 'actual_end'])
            .then(r => r[0])
        }

        if (actual_end) {
          appointment = await knex("appointments")
            .where("id", "=", id)
            .update({
              actual_end
            })
            .returning(["id", "actual_start", "actual_end"])
            .then(r => r[0]);
        }

        return appointment
        
      }
    },
}