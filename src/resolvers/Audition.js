import knex from "../../knex/knex";

export const resolvers = {
    Audition: {
           appointments: async (audition, args, context) => {
             if (!context.viewer) return;
             try {
               const appointments = await knex
                 .select(
                   "appointments.id",
                   "appointments.start_time",
                   "appointments.end_time",
                   "users.*"
                 )
                 .from("appointments")
                 .leftJoin("users", "users.id", "appointments.user_id")
                 .andWhere("appointments.audition_id", "=", audition.id)
                 .orderBy("appointments.start_time");
               let structuredAppointments = [];
               appointments.forEach(appointment => {
                 structuredAppointments.push({
                   id: appointment.id,
                   start_time: appointment.start_time,
                   end_time: appointment.end_time,
                   user: {
                     first_name: appointment.first_name,
                     last_name: appointment.last_name,
                     phone_number: appointment.phone_number,
                     age: appointment.age,
                     equity: appointment.equity,
                     gender: appointment.gender,
                     email: appointment.email,
                     feet: appointment.feet,
                     inches: appointment.inches,
                     birthday: appointment.birthday,
                     profile_uri: appointment.profile_uri
                   }
                 });
               });

               return structuredAppointments;
             } catch (error) {
               console.log(error);
             }
         },
    }
  }

