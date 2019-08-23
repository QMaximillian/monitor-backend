import gql from "graphql-tag";

export const typeDef = gql`
type Mutation {
    login(email: String, password: String!): Viewer!
    updateTodo(id: String!, task: String!, completed: Boolean!, audition_id: String!): Todo!
    saveTodo(task: String!, completed: Boolean!, audition_id: String!): Todo!
    createMessage(text: String!, audition_id: String!): Message
  }`
