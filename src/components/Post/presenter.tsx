import styles from './index.module.scss';
import { Create } from '@/types/form';
import { NextRouter } from 'next/router';
import { FieldErrors, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

type Props = {
  handleSubmit: UseFormHandleSubmit<Create>;
  onSubmit: SubmitHandler<Create>;
  register: UseFormRegister<Create>;
  errors: FieldErrors<Create>;
  userId: string;
  router: NextRouter;
};

export function Presenter(props: Props) {
  return (
    <>
      <div className={styles.inputWrapper}>
        <div className={styles.error}>
          {props.errors.userId && <span>※Please login again</span>}
          {props.errors.text && <span>※Please input text</span>}
        </div>
        <div className={styles.textareaWrapper}>
          <input
            type='hidden'
            defaultValue={props.userId}
            {...props.register('userId', { required: true })}
          />
          <textarea className={styles.textarea} {...props.register('text', { required: true })} />
        </div>
        <div className={styles.post}>
          <button className={styles.btnCancel} onClick={() => props.router.push('/timeLine')}>
            Cancel
          </button>
          <button className={styles.btnPost} onClick={props.handleSubmit(props.onSubmit)}>
            Post
          </button>
        </div>
      </div>
    </>
  );
}
