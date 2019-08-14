import 'dotenv/config';
import cors from 'cors'
import { ApolloServer, gql } from 'apollo-server-express'
import RootQuery from '../graphql/RootQuery'
import express from "express";
import bcrypt from 'bcrypt'
import knex from "../knex/knex";
import jwt from "jsonwebtoken";
import { getViewer , authenticated } from './lib'



const app = express();
app.use(cors('*'))

const schema = gql`
  type Query {
    viewer: User!
    audition(audition_id: String!): Audition!
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
    show_name: String!
    appointments: [Appointment!]!
  }

  type Appointment {
    id: String!
    time: String!
    user: User
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
    phone_number: String!
    age: Int!
    equity: Boolean!
    gender: String
    feet: Int!
    inches: Int!
    birthday: String!
    token: String!
    monitor_auditions: [Audition]!
  }
`;

const resolvers = {
  Mutation: {
    login: async (parent, { email, password }, context) => {
      try {
        let user = await knex("users").where("email", email);

        user = user[0];

        if (!user) {
          throw new Error("No user found");
        }

        const valid = await bcrypt.compare(password, user.password);

        if (!valid) {
          throw new Error("Invalid password");
        }

        const token = jwt.sign({ id: user.id }, "frindle");

        user.token = token;

        return user;
      } catch (error) {
        throw new Error(error);
      }
    }
  },
  Query: {
    viewer: async (parent, args, context) => {
      if (!context.viewer) return;

      try {
        const user = await knex("users")
          .where("users.id", context.viewer.id)
          .then(row => row[0]);

        return user;
      } catch (error) {
        throw new Error(error);
      }
    },
    audition: async (parent, args, context) => {
      if (!context.viewer) return;

      try {
        const audition = await knex('auditions')
        .where("auditions.id", args.audition_id)
        .then(row => row[0])

        return audition
      } catch(error) {
        throw new Error
      }
    }
  },
  User: {
    monitor_auditions: async (user, args, context) => {
      if (!context.viewer) return;
      try {
        const monitor_auditions = await knex("auditions").where(
          "auditions.monitor_id",
          context.viewer.id
        );

        return monitor_auditions;
      } catch (error) {
        throw new Error(error);
      }
    }
  },
  Audition: {
    appointments: async (audition, args, context) => {
      if (!context.viewer) return;
      try {
        const appointments = await knex
          .select("appointments.id", "appointments.time", "users.*")
          .from("appointments")
          .leftJoin("users", "users.id", "appointments.user_id")
          .andWhere("appointments.audition_id", "=", audition.id)
          .orderBy("appointments.time");
        let structuredAppointments = []
        appointments.forEach(appointment => {
          structuredAppointments.push(
            {
              id: appointment.id,
              time: appointment.time,
              user: {
                first_name: appointment.first_name,
                last_name: appointment.last_name,
                phone_number: appointment.phone_number,
                age: appointment.age,
                equity: appointment.equity,
                gender: appointment.gender,
                email: appointment.email
              }
            }
          )
        })
        return structuredAppointments;
      } catch (error) {
        throw new Error(error);
      }
    }
  }
};


const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context:  async ({ req }) => {
      let authToken = null;
      let viewer = null;
      // console.log(req.headers)
      authToken = req.headers.authorization;

      if (authToken) {
        viewer = await getViewer(authToken);
      }

      return {
        viewer
      }; 
}
    
});  

server.applyMiddleware({ app });

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});
