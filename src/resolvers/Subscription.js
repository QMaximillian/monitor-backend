import { pubsub } from "../index";


export const resolvers = {
    Subscription: {
        messageCreated: {
            subscribe: () => pubsub.asyncIterator(['MESSAGE_CREATED'])
        },
        upcoming_appointment: {
            subscribe: () => pubsub.asyncIterator(['UPCOMING_APPOINTMENT'])
        }
    }
}