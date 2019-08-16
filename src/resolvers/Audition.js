import knex from '../../knex/knex'
export const resolvers = {
    Audition: {
           appointments: async (audition, args, context) => {
             if (!context.viewer) return;
             try {
               const appointments = await knex
                 .select(
                   "appointments.id",
                   "appointments.time",
                   "users.*"
                 )
                 .from("appointments")
                 .leftJoin(
                   "users",
                   "users.id",
                   "appointments.user_id"
                 )
                 .andWhere(
                   "appointments.audition_id",
                   "=",
                   audition.id
                 )
                 .orderBy("appointments.time");
               let structuredAppointments = [];
               appointments.forEach(appointment => {
                 structuredAppointments.push({
                   id: appointment.id,
                   time: appointment.time,
                   user: {
                     first_name: appointment.first_name,
                     last_name: appointment.last_name,
                     phone_number: appointment.phone_number,
                     age: appointment.age,
                     equity: appointment.equity,
                     gender: appointment.gender,
                     email: appointment.email
                   }
                 });
               });
               return structuredAppointments;
             } catch (error) {
               throw new Error(error);
             }
         }
        }
       }
