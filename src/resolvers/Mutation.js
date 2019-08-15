import knex from '../../knex/knex'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const resolvers = {
    Mutation: {
    login: async (parent, { email, password }, context) => {
      try {
        let user = await knex("users").where("email", email);

        user = user[0];

        if (!user) {
          throw new Error("No user found");
        }

        const valid = await bcrypt.compare(password, user.password);

        if (!valid) {
          throw new Error("Invalid password");
        }

        const token = jwt.sign({ id: user.id }, "frindle");

        user.token = token;

        return user;
      } catch (error) {
        throw new Error(error);
      }
    }
  },
}