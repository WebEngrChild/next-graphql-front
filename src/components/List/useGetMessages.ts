import { client } from '@/graphql/client';
import { query } from '@/graphql/document';
import { useQuery } from '@tanstack/react-query';
import { useCookies } from 'react-cookie';

export const useGetMessages = () => {
  const [cookies] = useCookies(['_csrf']);
  const requestQuery = async () => client(cookies._csrf).request(query);
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['messages'],
    queryFn: requestQuery,
  });

  return {
    isLoading,
    isError,
    data,
    error,
  };
};
