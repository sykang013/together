import { deleteDoc, doc } from 'firebase/firestore';
import { useCallback, useMemo, useState } from 'react';
import { db } from './index';

export function useDeleteData(collectionKey: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);

  const deleteData = useCallback(
    async (documentKey: string) => {
      const documentRef = doc(db, collectionKey, documentKey);

      setIsLoading(true);

      try {
        await deleteDoc(documentRef);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    },
    [collectionKey]
  );

  return useMemo(
    () => ({
      isLoading,
      error,
      deleteData,
    }),
    [error, isLoading, deleteData]
  );
}
