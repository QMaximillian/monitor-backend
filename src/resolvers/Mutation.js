import knex from '../../knex/knex'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import uuidv4 from 'uuid/v4'

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
      const { id, task, completed } = args
      // console.log("args", args);
      try {
            // Take todo id
            const updatedTodo = await knex('todos')
              .where({ id })
              .update({
                task,
                completed
               }).returning(['id', 'audition_id', 'task', 'completed']).then(r => r[0])
                
                // console.log('updatetodo', updatedTodo) 
             // Add "created_at" to todo, sort by created_at
             // 
              return updatedTodo
            
          } catch (error) {
        console.log(error);
      }
    }
  },
}