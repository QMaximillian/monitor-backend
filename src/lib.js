import bcrypt from "bcrypt";
import knex from "../knex/knex";
import jwt from "jsonwebtoken";

export const getViewer = async (authToken) => {

  try {
    const payload = jwt.verify(authToken, 'frindle')
    console.log('payload', payload)
    let viewer = await knex.select('id').from('users').where('id', payload.id)
    console.log("viewer", viewer);
    return viewer
  } catch(error) {
    console.log(error)
  }
    
    
    // Decode authToken using secret
    // query database for user with that id
    // if authToken === id: query the database and return the user
    // if authToken !== id return null
}