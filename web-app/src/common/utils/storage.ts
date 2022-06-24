interface StorageState {
  [key: string]: unknown;
}

export const localStorageGet = (key: string): StorageState | undefined => {
  try {
    const serializedState = localStorage.getItem(key);

    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    console.error("Get local storage item error: ", err);
  }
};

export const localStorageSet = <T>(key: string, value: T): void => {
  try {
    const serializedState = JSON.stringify(value);

    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error("Set local storage item error: ", err);
  }
};
