import { useState, useEffect } from 'react';

const useDebounce = (value: string, delay: number = 200) => {
  const [debounceValue, setDebounceValue] = useState(value);
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
