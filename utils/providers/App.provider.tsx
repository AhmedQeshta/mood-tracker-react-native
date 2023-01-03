import { createContext, ReactNode, useCallback, useContext, useState, useEffect } from 'react';
import { IAppContext } from '../interfaces/appContext';
import { IMoodOptionWithTimestamp, IMoodsOptions } from '../interfaces/moods';
import { getAppData, setAppData } from '../async-storage/moodList';

const AppContext = createContext<IAppContext>({
  moodList: [],
  handleMoodSelection: () => {},
  handleDeleteMood: () => {},
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

  const handleDeleteMood = useCallback((mood: IMoodOptionWithTimestamp) => {
    setMoodList((current) => {
      const newValue = current?.filter((item) => item.timestamp !== mood.timestamp);
      setAppData({ moodList: newValue });
      return newValue;
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
    <AppContext.Provider value={{ moodList, handleMoodSelection, handleDeleteMood }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
