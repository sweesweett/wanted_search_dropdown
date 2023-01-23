import { useState, useEffect } from 'react';

const useDebounce = (value: number | string, delay: number = 400) => {
  const [debounceValue, setDebounceValue] = useState<number | string>(value);
  useEffect(() => {
    const debounceHandler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(debounceHandler);
    };
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
