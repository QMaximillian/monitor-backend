import knex from '../../knex/knex'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
    // updateTodo: async (parent, {id}, context) => {
    //   if (!context.viewer) return
      
    //   try {
    //     // Take todo id
    //     // knex query to save new text and completed properties
    //   } catch(error) {
    //     console.log(error)
    //   }
    // },
    saveTodo: async (parent, args, context) => {
      if (!context.viewer) return;

      console.log("here");
      try {
        // Generate a new id 
        // knex query to save new todo to database with the audition_id
      } catch (error) {
        console.log(error);
      }
    }
  },
}