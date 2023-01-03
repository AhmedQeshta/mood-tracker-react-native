import { IAppData } from '../interfaces/appContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const dataKey = 'moodList';

export const setAppData = async (appData: IAppData) => {
  try {
    await AsyncStorage.setItem(dataKey, JSON.stringify(appData));
  } catch {}
};

export const getAppData = async (): Promise<IAppData | null> => {
  try {
    const data = await AsyncStorage.getItem(dataKey);
    if (data) {
      return JSON.parse(data);
    }
  } catch {}
  return null;
};
