import gql from "graphql-tag";

export const typeDef = gql`
  type Role {
    id: String!
    role: String!
    user_id: String!
  }
`;
