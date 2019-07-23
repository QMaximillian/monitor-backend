import 'dotenv/config';
import cors from 'cors'
import { ApolloServer, gql } from 'apollo-server-express'
import RootQuery from '../graphql/RootQuery'
import express from "express";

const app = express();
app.use(cors())

const schema = gql`
  type Query {
    users: [User!]
    user(id: ID!): User
    me: User
  }

  type Theater {
    id: ID!
    name: String!
    street_num: Int!
    street_address: String!
    city: String!
    state: String!
    zip_code: String!
  }

  type Season {
    id: ID!
    name: String!
    year: Int!
    season_number: Int!
  }

  type Audition {
    id: ID!
    date: String!
    begin_time: String!
    end_time: String!
    interval: Int!
    street_num: Int!
    street_address: String!
    city: String!
    state: String!
    zip_code: String!
  }

  type Appointment {
    user: User
    time: String!
    audition: Audition!
  }

  type Monologue {
    play: String!
  }

  type Song {
    name: String!
  }

  type FAQ {
    question: String!
    answer: String!
  }

  type Info {
    info: String!
  }

  type Amenities {
    name: String!
    description: String!
  }

  type User {
    id: ID!
    first_name: String!
    last_name: String!
    password: String!
    email: String!
    phone: String!
    equity: Boolean!
    gender: String
    feet: Int!
    inches: Int!
    birthday: String!
  }
`;

const resolvers = {
    Query: {
    },
    User: {
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
