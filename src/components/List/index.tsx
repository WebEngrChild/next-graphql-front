import { useUserState } from '@/atoms/userAtom';
import { Presenter } from '@/components/List/presenter';
import { useGetMessages } from '@/components/List/useGetMessages';
import { useRouter } from 'next/router';
import React from 'react';

export function List() {
  const { setUser } = useUserState();
  const router = useRouter();
  const { isLoading, isError, data, error } = useGetMessages();

  if (isLoading) <span>Loading...</span>;
  if (isError) {
    console.error('Error: useGetMessages', error);
    setUser(null);
    router.push('/');
  }

  return <>{data && <Presenter data={data} router={router} />}</>;
}
