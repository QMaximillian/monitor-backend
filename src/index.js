import 'dotenv/config';
import cors from 'cors'
import { ApolloServer, gql } from 'apollo-server-express'
import RootQuery from '../graphql/RootQuery'
import express from "express";
console.log("Running")

console.log(process.env.MY_SECRET)

const app = express();
app.use(cors())

const schema = gql`
  type Query {
    users: [User!]
    user(id: ID!): User
    me: User
  }

  type User {
    id: ID!
    username: String!
  }
`;

let users = {
    1: {
        id: '1',
        username: 'Quinn L'
    },
    2: {
        id: '2', 
        username: '12345'
    }
}

const me = users[1]
const resolvers = {
    Query: {
        users: () => {
            return Object.values(users)
        },
        user: (paren, {id}) => {
            return users[id]
        },
        me: (parent, args, { me }) => {
            return me
        }
    },
    User: {
        username: user => {
            return user.username
        }
    }
}

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {

  }
});  

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});
