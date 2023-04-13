import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useCallback, useMemo, useState } from 'react';
import { db } from './index';

interface IUserAuth {
  email: string | null;
  displayName: string | null;
  createAt?: string;
  uid: string;
}

export function useCreateAuthUser(collectionKey = 'users') {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);
  const uuid = self.crypto.randomUUID();

  const createAuthUser = useCallback(
    async (userAuth: IUserAuth, additionData = {}) => {
      if (!userAuth) {
        return;
      }
      const userDocRef = doc(db, collectionKey, userAuth.uid);
      const profileDocRef = doc(userDocRef, 'profile', uuid);
      setIsLoading(true);

      try {
        const userSnapshot = await getDoc(userDocRef);
        if (!userSnapshot.exists()) {
          const { email, displayName } = userAuth;
          const createAt = serverTimestamp();
          await setDoc(userDocRef, {
            email,
            displayName,
            createAt,
            ...additionData,
          });

          await setDoc(profileDocRef, {
            name: '타잉',
            mobileUrl:
              'https://firebasestorage.googleapis.com/v0/b/together-de6e5.appspot.com/o/profiles%2Fdefaults%2Fprofile4%2Fdesktop%2Fprofile_4.png?alt=media&token=053125f0-3d85-40f7-9983-9f3775854dc3',
          });
        } else {
          throw new ReferenceError(
            '이미 Firestore에 가입 등록된 사용자입니다.'
          );
        }
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    },
    [collectionKey]
  );

  return useMemo(
    () => ({ isLoading, error, createAuthUser }),
    [createAuthUser, error, isLoading]
  );
}
