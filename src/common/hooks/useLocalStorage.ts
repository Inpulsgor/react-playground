import { useState, useEffect, Dispatch } from "react";
import { localStorageGet, localStorageSet } from "common/utils/storage";

export const useLocalStorage = (
  initialValue: unknown,
  key: string,
): [unknown, Dispatch<unknown>] => {
  const getValue = () => {
    const storage = localStorageGet(key);

    if (storage) return storage;

    return initialValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorageSet(key, value);
  }, [value, key]);

  return [value, setValue];
};
