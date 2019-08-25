import gql from 'graphql-tag'

export const typeDef = gql`
    type Subscription {
        messageCreated: Message!
    }

    type Message {
        id: String!
        text: String!
        audition_id: String!
        user_id: String!
        first_name: String!
        last_name: String!
    }
`