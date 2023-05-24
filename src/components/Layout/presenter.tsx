import styles from './index.module.scss';

type Props = {
  logout: () => void;
};

export function Presenter(props: Props) {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <button className={styles.btnLogOut} onClick={() => props.logout()}>
            Logout
          </button>
        </nav>
      </header>
    </>
  );
}
