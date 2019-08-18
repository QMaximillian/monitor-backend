import 'dotenv/config';
import cors from 'cors'
import { ApolloServer, gql } from 'apollo-server-express'
import express from "express";
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

/////
import {resolvers as auditionResolvers} from './resolvers/Audition'
import {resolvers as viewerResolvers} from './resolvers/Viewer'
import {resolvers as queryResolvers} from './resolvers/Query'
import {resolvers as mutationResolvers} from './resolvers/Mutation'



const app = express();
app.use(cors('*'))




const resolvers = merge(
    resolvers,
    auditionResolvers,
    viewerResolvers,
    queryResolvers,
    mutationResolvers
); 

const typeDefs = [Viewer, User, Audition, Appointment, Theater, Mutation, Query, Season, Monologue, Song, FAQ, Info, Amenities, Instruction];


const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers,
  context:  async ({ req }) => {
      let authToken = null;
      let viewer = null;
      // console.log('authorization', req.headers.authorization)
      authToken = req.headers.authorization;
      // console.log('authToken', authToken)
      if (authToken) {
        viewer = await getViewer(authToken);
      }
      // console.log('viewer', viewer)
      return {
        viewer
      }; 
}
    
});  

server.applyMiddleware({ app });

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});
