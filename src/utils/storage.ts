import { MMKV } from 'react-native-mmkv';

export enum StorageKeys {
  demands = '@demands',
}

const storageInit = () => {
  const storageLocal = new MMKV();

  const getItem = <T>(key: StorageKeys): T | undefined => {
    try {
      const item = storageLocal.getString(key);
      if (!item) {
        return undefined;
      }

      return JSON.parse(item) as T;
    } catch (error) {
      return undefined;
    }
  };

  const setItem = (key: StorageKeys, data: any): void => {
    try {
      storageLocal.set(key, JSON.stringify(data));
    } catch (error) {
      return;
    }
  };

  const deleteITem = (key: StorageKeys) => {
    try {
      storageLocal.delete(key);
    } catch (error) {
      console.log('Error delete item storage');
      return undefined;
    }
  };

  return {
    getItem,
    setItem,
    deleteITem,
  };
};

export const storage = storageInit();
