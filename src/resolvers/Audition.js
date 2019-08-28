import knex from "../../knex/knex";

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
                 .leftJoin("users", "users.id", "appointments.user_id")
                 .andWhere("appointments.audition_id", "=", audition.id)
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
               console.log(error);
             }
         },
           upcoming_appointment: async (audition, args, context) => {
             if (!context.viewer) return;
             
             const upcoming_appointment =
                await knex
                 .select("appointments.time", "users.first_name", "users.last_name", "users.email", "users.phone_number")
                 .from("appointments")
                 .leftJoin('users', 'users.id', 'appointments.user_id')
                 .where('audition_id', audition.id)
                 .andWhere(knex.raw(`time::timestamp`), ">", knex.raw(`current_timestamp AT TIME ZONE 'utc'`))
                 .limit(1).then(r => r[0])

              

              console.log(upcoming_appointment)
              
              const { time, first_name, last_name, email, phone_number } = upcoming_appointment 
              return { time , user: { first_name, last_name, email, phone_number }
              
              // SELECT appointments.time, users.first_name, users.last_name, users.email, users.phone_number
              //  FROM appointments 
              // LEFT JOIN users ON users.id = appointments.user_id 
              // WHERE audition_id = 'f4d06d8d-f943-4346-936a-441adbb1a8b1' AND appointments.time::timestamp > current_timestamp AT TIME ZONE 'utc' LIMIT 1

           }
    }
  }
}
