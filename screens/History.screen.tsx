import { FC } from 'react';
import {  SafeAreaView, ScrollView } from 'react-native';
import { useAppContext } from '../utils/providers/App.provider';
import { MoodItemRow } from '../components/MoodItemRow';

export const History: FC = () => {
  const { moodList } = useAppContext();

  return (
    <SafeAreaView>
      <ScrollView>
        {moodList.map((item) => (
          <MoodItemRow item={item} key={item.timestamp} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
