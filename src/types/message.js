import gql from "graphql-tag";

export const typeDef = gql`
  type Message {
    id: String!
    content: String!
  }
`;
