import { SickTypes } from '../types/sick.type';
import { useState, useEffect } from 'react';

const useCache = (keyword: string) => {
  const [cacheResult, setCacheResult] = useState<SickTypes[] | null>(null);
  useEffect(() => {
    if (keyword) {
      handleCache(keyword);
    }
  }, [keyword]);
  if (!keyword) return null;

  const handleCache = async (url: string) => {
    const encode = `sick?q=${encodeURI(url)}`;
    const cacheStorage = await caches.open('searchQuery');
    const cache = await cacheStorage.match(encode);
    if (cache) {
      setCacheResult(await cache.json());
      return;
    }
    await fetch(`http://localhost:4000/${encode}`)
      .then((data) => {
        const clone = data.clone();
        cacheStorage.put(encode, clone);
        setTimeout(() => {
          cacheStorage.delete(encode);
        }, 60 * 1000);
        return data.json();
      })
      .then((data) => setCacheResult(data))
      .catch((err) => console.log(err));
  };
  return cacheResult;
};

export default useCache;
