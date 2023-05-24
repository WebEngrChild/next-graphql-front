import { Presenter } from '@/components/Layout/presenter';
import useLogout from '@/components/Layout/useLogout';
import type { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  const { logout } = useLogout();

  return (
    <>
      <Presenter logout={logout} />
      {children}
    </>
  );
}
