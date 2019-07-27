import 'dotenv/config';
import cors from 'cors'
import { ApolloServer, gql } from 'apollo-server-express'
import RootQuery from '../graphql/RootQuery'
import express from "express";
import bcrypt from 'bcrypt'
import knex from "../knex/knex";
import jwt from "jsonwebtoken";
import {getViewer} from './lib'

const app = express();
app.use(cors())

const schema = gql`
  type Query {
    users: [User!]
    user(id: ID!): User
    me: User
  }
  
  type Mutation {
    login(email: String, password: String!): User
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
    token: Token!
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

  type Token {
    token: String!
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
    token: String!
  }
`;

const resolvers = {
    Mutation: {
      login: async (parent, {email, password}, context) => {

        try {
          let user = await knex('users').where('email', email)

          user = user[0]

          if (!user) {
            throw new Error('No user found')
          }

          const valid = await bcrypt.compare(password, user.password)

          if (!valid) {
            throw new Error('Invalid password')
          }

          const token = jwt.sign({id: user.id}, 'frindle')
          console.log(token)
          user.token = token 
          return user
        } catch(error) {
          throw new Error('Error processing request')
        }
      }
    },
    Query: {
      users: async (parent, { token }) => {
        
      }
    },
    User: {
    }
}
// const addUser = async (req, res, next) => {
  
//   try {
//     const token = await req.headers["authorization"];
//     const user = await jwt.verify(token, 'frindle')
//     knex.
//     req.user = user
//     next();
//   } catch(error) {
//     return Promise.reject(new Error(400))
//   }
// }

// app.use(addUser)
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context:  async ({ req }) => {
    let authToken = null;
    let viewer = null;


     authToken = req.headers['AUTHORIZATION']

     if (authToken) {
       viewer = await getViewer(authToken)
     }

     console.log(viewer)

    return {
      authToken,
      viewer
    } 
}
    
});  

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});
