import gql from 'graphql-tag'

export const typeDef = gql`
    type Subscription {
        newMessage: Message!
    }
  `