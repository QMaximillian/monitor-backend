import knex from "../../knex/knex";

const NEW_MESSAGE = "NEW_MESSAGE";
export const resolvers = {
    Subscription: {
        newMessage: {
            subscribe: (parent, args, {pubsub}) => pubsub.asyncIterator(NEW_MESSAGE)
        }
    }
}