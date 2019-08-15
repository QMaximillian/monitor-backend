import gql from "graphql-tag";

export const typeDef = gql`
type Mutation {
    login(email: String, password: String!): User
  }`
