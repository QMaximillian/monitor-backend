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
           },
           upcoming_audition: async (user, args, context) => {
             if (!context.viewer) return;


               const upcoming_audition = await knex.select('*').from('auditions')
                .where(knex.raw(`auditions.date::date`), '>=', 'NOW()')
                .andWhere('auditions.monitor_id', user.id)
                .orderBy('auditions.date').limit(1).then(row => row[0])


             const instructions = await knex('instructions.*')
               .distinct()
               .from(knex.raw(`instructions, auditions`))
               .where('auditions.monitor_id', user.id)
               .andWhere('instructions.audition_id', upcoming_audition.id)

             return { ...upcoming_audition, instructions: instructions };
           }
         }
       };