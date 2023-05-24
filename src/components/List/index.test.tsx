import '@testing-library/jest-dom/extend-expect';
import { List } from '@/components/List';
import { GetMessagesQueryDocumentQuery } from '@/graphql/generated/graphql';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { graphql } from 'msw';
import { setupServer } from 'msw/node';
import { RecoilRoot } from 'recoil';

// 対策： NextRouter was not mounted. https://nextjs.org/docs/messages/next-router-not-mounted
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// Mock Server
const server = setupServer(
  graphql.query<GetMessagesQueryDocumentQuery>('getMessagesQueryDocument', (req, res, ctx) => {
    return res(
      ctx.data({
        getMessages: [
          {
            id: '1',
            text: 'test message',
            user: {
              name: 'test-user1',
            },
            created_at: '2023-01-30T12:07:06Z',
          },
        ],
      }),
    );
  }),
);

// set up
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Test
describe('mocking API', () => {
  it('Fetch success Should display fetched data correctly', async () => {
    // 対策： No QueryClient set, use QueryClientProvider to set one
    const queryClient = new QueryClient();

    render(
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <List />
        </QueryClientProvider>
      </RecoilRoot>,
    );

    expect(screen.queryByText(/test-user1/)).toBeNull();
    expect(await screen.findByText(/test-user1/)).toBeInTheDocument();

    // テスト下でのレンダリング表示内容確認用
    // screen.debug();
  });
});
