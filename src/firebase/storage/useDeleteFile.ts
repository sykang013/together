import { useState, useMemo, useCallback } from 'react';
import { deleteObject, ref } from 'firebase/storage';
import { storage } from './index';

export function useDeleteFile() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);

  const deleteFile = useCallback(async (urlPath: string) => {
    const assetRef = ref(storage, urlPath);

    setIsLoading(true);

    try {
      await deleteObject(assetRef);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return useMemo(
    () => ({ isLoading, error, deleteFile }),
    [deleteFile, error, isLoading]
  );
}
