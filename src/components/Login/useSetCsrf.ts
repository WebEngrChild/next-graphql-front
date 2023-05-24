import { useRouter } from 'next/router';

export const useSetCsrf = () => {
  const router = useRouter();
  const setCsrf = () =>
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/csrf-cookie`, {
      mode: 'cors',
      credentials: 'include',
    }).catch((error) => {
      console.error('Error:', error);
      router.push('/');
    });

  return { setCsrf };
};
