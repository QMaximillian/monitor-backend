import knex from "../knex/knex";
import jwt from "jsonwebtoken";

export const getViewer = async (authToken) => {

  try {
    const payload = jwt.verify(authToken, 'frindle')

    let viewer = await knex.select('id').from('users').where('id', payload.id)

    return viewer
  } catch(error) {
    console.log(error)
  }
    
    
    // Decode authToken using secret
    // query database for user with that id
    // if authToken === id: query the database and return the user
    // if authToken !== id return null
}


export const authenticated = next => (root, args, context, info) => {
  if (!context.viewer) {
    throw new Error(`Unauthenticated!`);
  }

  return next(root, args, context, info);
};