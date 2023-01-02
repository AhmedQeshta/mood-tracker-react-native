import { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { IAppContext } from '../interfaces/appContext';
import { IMoodOptionWithTimestamp, IMoodsOptions } from '../interfaces/moods';

const AppContext = createContext<IAppContext>({
  moodList: [],
  handleMoodSelection: () => {},
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [moodList, setMoodList] = useState<IMoodOptionWithTimestamp[] | any[]>([]);

  const handleMoodSelection = useCallback((selectedMood: IMoodsOptions) => {
    setMoodList((prev) => [...prev, { mood: selectedMood, timestamp: new Date() }]);
  }, []);

  return (
    <AppContext.Provider value={{ moodList, handleMoodSelection }}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
