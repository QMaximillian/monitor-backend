import knex from "../knex/knex";
import jwt from "jsonwebtoken";

export const getViewer = async (authToken) => {

  try {
    const payload = jwt.verify(authToken, 'frindle')

    let viewer = await knex.select('id').from('users').where('id', payload.id).then(row => row[0])

    return viewer
  } catch(error) {
    throw new Error(error)
  }
}


export const authenticated = next => (root, args, context, info) => {
  if (!context.viewer) {
    throw new Error(`Unauthenticated!`);
  }

  return next(root, args, context, info);
};