import knex from "../../knex/knex";
import { pubsub } from "../index";
import differenceInMinutes from "date-fns/difference_in_minutes";

const UPCOMING_APPOINTMENT = "UPCOMING_APPOINTMENT";

export const resolvers = {
    Query: {
    viewer: async (parent, args, context) => {
      if (!context.viewer) return
      try {
        const user = await knex("users")
          .where("users.id", context.viewer.id)
          .then(row => row[0]);

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
    },
    getAllMessages: async (parent, { audition_id }, context) => {
      if (!context.viewer) return

      try {
        const messages = await knex.select("*").from("messages").where('audition_id', audition_id)
        return messages
      } catch(error) {
        console.log(error)
      }
    }, 
    upcoming_appointment: async (parent, {audition_id}, context) => {
             if (!context.viewer) return;
             

             try {
             const upcoming_appointment =
                await knex
                 .select("appointments.time", "appointments.id", "users.id AS user_id", "users.first_name", "users.last_name", "users.email", "users.phone_number")
                 .from("appointments")
                 .leftJoin('users', 'users.id', 'appointments.user_id')
                 .where('audition_id', audition_id)
                 .andWhere(knex.raw(`time::timestamp`), ">", knex.raw(`current_timestamp AT TIME ZONE 'utc'`))
                 .orderBy('appointments.time')
                 .limit(1).then(r => r[0])

                 if (upcoming_appointment) {
                const {
                  id,
                  time,
                  first_name,
                  last_name,
                  email,
                  phone_number,
                  user_id
                } = upcoming_appointment; 
                
                return { id, time , user: { id: user_id, first_name, last_name, email, phone_number }}
              } else {
                return null
              }
             } catch(error) {
               console.log(error)
             }
              // SELECT appointments.time, users.first_name, users.last_name, users.email, users.phone_number
              //  FROM appointments 
              // LEFT JOIN users ON users.id = appointments.user_id 
              // WHERE audition_id = 'f4d06d8d-f943-4346-936a-441adbb1a8b1' AND appointments.time::timestamp > current_timestamp AT TIME ZONE 'utc' LIMIT 1

           }
  },
}