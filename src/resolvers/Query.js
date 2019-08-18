import knex from "../../knex/knex";

export const resolvers = {
    Query: {
    viewer: async (parent, args, context) => {
      if (!context.viewer) return
      try {
        const user = await knex("users")
          .where("users.id", context.viewer.id)
          .then(row => row[0]);
        // console.log(user)
        return user;
      } catch (error) {
        throw new Error(error);
      }
    },
    audition: async (parent, args, context) => {
      if (!context.viewer) return;

      try {
        const audition = await knex('auditions')
        .where("auditions.id", args.audition_id)
        .then(row => row[0])

        return audition
      } catch(error) {
        throw new Error
      }
    }
  },
}