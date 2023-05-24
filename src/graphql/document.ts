import { graphql } from '@/graphql/generated/gql';

export const query = graphql(/* GraphQL */ `
  query getMessagesQueryDocument {
    getMessages {
      id
      text
      created_at
      user {
        name
      }
    }
  }
`);

export const create = graphql(/* GraphQL */ `
  mutation createMessage($userId: String!, $text: String!) {
    createMessage(input: { userId: $userId, text: $text }) {
      id
      text
      user {
        id
      }
      created_at
    }
  }
`);
