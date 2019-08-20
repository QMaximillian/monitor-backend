import gql from 'graphql-tag'

export const typeDef = gql`
         type Viewer {
           id: ID!
           first_name: String!
           last_name: String!
           password: String!
           email: String!
           phone_number: String!
           age: Int!
           equity: Boolean!
           gender: String
           feet: Int!
           inches: Int!
           birthday: String!
           token: String!
           monitor_auditions: [Audition]!
           upcoming_audition: Audition!
           roles: [Role]!
         }
       `;