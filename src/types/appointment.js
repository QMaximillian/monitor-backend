import gql from "graphql-tag";

export const typeDef = gql`
         type Appointment {
           id: String!
           time: String!
           user: User
         }
       `;