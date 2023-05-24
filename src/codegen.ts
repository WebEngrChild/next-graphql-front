import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './graphql/schema/**/*.graphql', // スキーマファイルの参照先を変更
  documents: './**/!(*.d).{ts,tsx}',
  ignoreNoDocuments: true,
  generates: {
    './graphql/generated/': {
      preset: 'client',
    },
  },
  hooks: {
    afterOneFileWrite: ['prettier --write'],
  },
};

export default config;
