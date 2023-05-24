import styles from './index.module.scss';
import { GetMessagesQueryDocumentQuery } from '@/graphql/generated/graphql';
import { NextRouter } from 'next/router';
import { BiUser } from 'react-icons/bi';

type Props = {
  data: GetMessagesQueryDocumentQuery;
  router: NextRouter;
};

export function Presenter(props: Props) {
  return (
    <>
      <div className={styles.contentWrapper}>
        {props.data.getMessages.map((message) => (
          <div key={message.id}>
            <div className={styles.tweetContentWrapper}>
              <div>
                <BiUser className={styles.svg} />
              </div>
              <div className={styles.tweet}>
                <div className={styles.tweetUser}>
                  <span>{message.user.name}</span>
                  <span>{message.created_at}</span>
                </div>
                <div>
                  <span className={styles.tweetText}>{message.text}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className={styles.btnWrapper}>
          <button onClick={() => props.router.push('/post')}>Create</button>
        </div>
      </div>
    </>
  );
}
