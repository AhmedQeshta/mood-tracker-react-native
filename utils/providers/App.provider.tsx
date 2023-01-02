import { createContext, ReactNode, useCallback, useContext, useState, useEffect } from 'react';
import { IAppContext, IAppData } from '../interfaces/appContext';
import { IMoodOptionWithTimestamp, IMoodsOptions } from '../interfaces/moods';
import AsyncStorage from '@react-native-async-storage/async-storage';

const dataKey = 'moodList';

const setAppData = async (appData: IAppData) => {
  try {
    await AsyncStorage.setItem(dataKey, JSON.stringify(appData));
  } catch {}
};

const getAppData = async (): Promise<IAppData | null> => {
  try {
    const data = await AsyncStorage.getItem(dataKey);
    if (data) {
      return JSON.parse(data);
    }
  } catch {}
  return null;
};

const AppContext = createContext<IAppContext>({
  moodList: [],
  handleMoodSelection: () => {},
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [moodList, setMoodList] = useState<IMoodOptionWithTimestamp[]>([]);

  const handleMoodSelection = useCallback((selectedMood: IMoodsOptions) => {
    setMoodList((prev) => {
      const newMoodList = [
        ...prev,
        {
          mood: selectedMood,
          timestamp: new Date().getTime(),
        },
      ];
      setAppData({ moodList: newMoodList });
      return newMoodList;
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAppData();
      if (data) {
        setMoodList(data.moodList);
      }
    };
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ moodList, handleMoodSelection }}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
