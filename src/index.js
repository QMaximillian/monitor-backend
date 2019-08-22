import 'dotenv/config';
import express from "express";
import cors from 'cors'
import { ApolloServer, graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from "body-parser";
import { PostgresPubSub } from "graphql-postgres-subscriptions"
import { execute, subscribe } from "graphql";
import http from 'http';

import { getViewer } from './lib'
import merge from 'lodash.merge'
import {typeDef as Viewer} from './types/viewer'
import {typeDef as User} from './types/user'
import {typeDef as Audition} from './types/audition'
import {typeDef as Appointment} from './types/appointment'
import {typeDef as Theater} from './types/theater'
import {typeDef as Mutation} from './types/mutation'
import {typeDef as Query} from './types/query'
import {typeDef as Season} from './types/season'
import {typeDef as Monologue} from './types/monologue'
import {typeDef as Song} from './types/song'
import {typeDef as FAQ} from './types/faq'
import {typeDef as Info} from './types/info'
import {typeDef as Amenities} from './types/amenities'
import {typeDef as Instruction} from './types/instructions'
import {typeDef as Todo} from './types/todo'
import {typeDef as Role} from './types/role'
import {typeDef as Subscription} from './types/subscription'

/////
import {resolvers as auditionResolvers} from './resolvers/Audition'
import {resolvers as viewerResolvers} from './resolvers/Viewer'
import {resolvers as queryResolvers} from './resolvers/Query'
import {resolvers as mutationResolvers} from './resolvers/Mutation'
import {resolvers as subscriptionResolvers} from './resolvers/Subscription'



const app = express();


export const pubsub = new PostgresPubSub({
         host: "127.0.0.1",
         user: "quinnlashinsky",
         database: "monitor",
         password: "",
         port: 5432
       });


const resolvers = merge(
    resolvers,
    auditionResolvers,
    viewerResolvers,
    queryResolvers,
    mutationResolvers,
    subscriptionResolvers
); 

const typeDefs = [
  Subscription,
  Viewer,
  User,
  Audition,
  Appointment,
  Theater,
  Mutation,
  Query,
  Season,
  Monologue,
  Song,
  FAQ,
  Info,
  Amenities,
  Instruction,
  Todo,
  Role
];


const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers,
  context:  async ({ req, connection }) => {
      if (connection){
        return connection.context
      }
      let authToken = null;
      let viewer = null;
      
      authToken = req.headers.authorization;
      
      if (authToken) {
        viewer = await getViewer(authToken);
      }
      
      return {
        viewer
      }; 
}
    
});  
const PORT = 8000
server.applyMiddleware({ app });

const httpServer = http.createServer(app)
server.installSubscriptionHandlers(httpServer)

httpServer.listen(PORT, () => {
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
  console.log(
    `🚀 Subscriptions ready at ws://localhost:${PORT}${
      server.subscriptionsPath
    }`
  );
});
