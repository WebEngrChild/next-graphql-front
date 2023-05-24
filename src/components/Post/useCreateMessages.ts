import { client } from '@/graphql/client';
import { create } from '@/graphql/document';
import { Create } from '@/types/form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

export const useCreateMessages = () => {
  const router = useRouter();
  const [cookies] = useCookies(['_csrf']);
  const requestQuery = async (input: Create) =>
    client(cookies._csrf).request(create, { userId: input.userId, text: input.text });
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: requestQuery,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['messages'] });
      router.push('/timeLine');
    },
    onError: (error, variables) => console.error(`error: ${error} variables: ${variables}`),
  });

  return { mutation };
};
