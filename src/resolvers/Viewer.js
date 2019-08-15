import knex from "../../knex/knex";

export const resolvers = {
    Viewer: {
    monitor_auditions: async (user, args, context) => {
      if (!context.viewer) return;

      try {
        const monitor_auditions = await knex("auditions").where(
          "auditions.monitor_id",
          context.viewer.id
        );

        return monitor_auditions;
      } catch (error) {
        throw new Error(error);
      }
    }
  },
}