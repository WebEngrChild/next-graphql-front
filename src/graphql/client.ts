import { GraphQLClient } from 'graphql-request';

export const client = (token: string) =>
  new GraphQLClient(`${process.env.NEXT_PUBLIC_API_URL}/query`, {
    headers: {
      'X-CSRF-TOKEN': token,
    },
    mode: 'cors',
    credentials: 'include',
  });
