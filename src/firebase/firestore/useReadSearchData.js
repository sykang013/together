import { useCallback, useMemo, useState } from 'react';
import { dbService } from '@/firebase/app';
import { useSetRecoilState } from 'recoil';
import { searchDataState } from '@/store/search/searchDataState';
import { useSearchParams } from 'react-router-dom';

const useReadSearchData = (collectionKey, keyword) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const setData = useSetRecoilState(searchDataState);

  const readSearchData = useCallback(async () => {
    if (!keyword) return;
    if (searchParams.get('keyword') === keyword) return;

    setIsLoading(true);

    try {
      setData([]);
      const collectionRef = dbService.collection(collectionKey);
      const snapshot = await collectionRef
        .where('title', '>=', keyword)
        .where('title', '<=', keyword + '\uf8ff')
        .get();
      snapshot.forEach((doc) =>
        setData((data) => [...data, { ...doc.data() }])
      );
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [collectionKey, keyword, setData]);
  return useMemo(
    () => ({
      isLoading,
      error,
      readSearchData,
    }),
    [readSearchData, error, isLoading]
  );
};

export default useReadSearchData;
