import { atom, useRecoilState, RecoilEnv } from 'recoil';
import { recoilPersist } from 'recoil-persist';

// `Duplicate atom key` Error対策
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

type UserState = { userId: string } | null;

// 永続化
const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: typeof window === 'undefined' ? undefined : localStorage,
});

// Atomの定義
const userState = atom<UserState>({
  key: 'userId',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const useUserState = () => {
  const [user, setUser] = useRecoilState<UserState>(userState);

  return { user, setUser };
};
