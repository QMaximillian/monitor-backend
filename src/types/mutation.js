import gql from "graphql-tag";

export const typeDef = gql`
type Mutation {
    login(email: String, password: String!): Viewer!
    saveTodo(id: String, task: String!, completed: Boolean!, audition_id: String!): Todo!
  }`
