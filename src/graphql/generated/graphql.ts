/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Message = {
  __typename?: 'Message';
  created_at: Scalars['String'];
  id: Scalars['ID'];
  text: Scalars['String'];
  updated_at: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createMessage: Message;
};

export type MutationCreateMessageArgs = {
  input: NewMessage;
};

export type NewMessage = {
  text: Scalars['String'];
  userId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getMessages: Array<Message>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type GetMessagesQueryDocumentQueryVariables = Exact<{ [key: string]: never }>;

export type GetMessagesQueryDocumentQuery = {
  __typename?: 'Query';
  getMessages: Array<{
    __typename?: 'Message';
    id: string;
    text: string;
    created_at: string;
    user: { __typename?: 'User'; name: string };
  }>;
};

export type CreateMessageMutationVariables = Exact<{
  userId: Scalars['String'];
  text: Scalars['String'];
}>;

export type CreateMessageMutation = {
  __typename?: 'Mutation';
  createMessage: {
    __typename?: 'Message';
    id: string;
    text: string;
    created_at: string;
    user: { __typename?: 'User'; id: string };
  };
};

export const GetMessagesQueryDocumentDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getMessagesQueryDocument' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getMessages' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'text' } },
                { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetMessagesQueryDocumentQuery, GetMessagesQueryDocumentQueryVariables>;
export const CreateMessageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createMessage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'userId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'text' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createMessage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'userId' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'userId' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'text' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'text' } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'text' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateMessageMutation, CreateMessageMutationVariables>;
