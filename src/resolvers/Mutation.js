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
    }
  },
}