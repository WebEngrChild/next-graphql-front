import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useCookies } from 'react-cookie';

const useLogout = () => {
  const [cookies] = useCookies(['_csrf']);
  const router = useRouter();
  const logout = useCallback(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {
      headers: {
        'X-CSRF-TOKEN': cookies._csrf,
      },
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    })
      .then(() => {
        router.push('/');
      })
      .catch((error) => {
        console.error('Error:', error);
        router.push('/');
      });
  }, [cookies._csrf, router]);

  return { logout };
};

export default useLogout;
