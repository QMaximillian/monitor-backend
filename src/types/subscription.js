import gql from 'graphql-tag'

export const typeDef = gql`
    type Subscription {
        messageCreated: Message
    }

    type Message {
        id: String!
        text: String!
        audition_id: String
    }
`