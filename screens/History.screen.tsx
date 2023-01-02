import { FC } from 'react';
import { View, Text } from 'react-native';
import { useAppContext } from '../utils/providers/App.provider';
import { MoodItemRow } from '../components/MoodItemRow';

export const History: FC = () => {
  const { moodList } = useAppContext();

  return (
    <View>
      {moodList.map((item) => (
        <MoodItemRow item={item} key={item.timestamp} />
      ))}
    </View>
  );
};
