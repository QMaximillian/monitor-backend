import gql from 'graphql-tag'

export const typeDef = gql`
         type Query {
           viewer: Viewer!
           audition(audition_id: String!): Audition!
           getAllMessages(audition_id: String!): [Message]!
           upcoming_appointment(audition_id: String!): Appointment
         }
       `;