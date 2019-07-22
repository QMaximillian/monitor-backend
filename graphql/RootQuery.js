import { gql } from "apollo-server-express";

const RootQuery = gql`
  type Query {
    me: User
  }

  type User {
    username: String!
  }
`;

export { RootQuery as default };
