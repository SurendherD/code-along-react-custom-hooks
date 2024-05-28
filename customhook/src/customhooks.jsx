import { useState, useEffect } from 'react';

const useStorage = (key, initialValue) => {
  const getStoredValue = (storage, key, initialValue) => {
    const storedValue = storage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  };

  const [value, setValue] = useState(() => {
    const localValue = getStoredValue(localStorage, key, initialValue);
    return localValue !== initialValue ? localValue : getStoredValue(sessionStorage, key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useStorage;
