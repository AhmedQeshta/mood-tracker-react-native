import { FC } from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { useAppContext } from '../utils/providers/App.provider';
import { MoodItemRow } from '../components/MoodItemRow';
import { styleHistory } from '../utils/styles/historyScreen';

export const History: FC = () => {
  const { moodList } = useAppContext();

  return (
    <SafeAreaView>
      <ScrollView>
        {moodList?.length ? (
          moodList
            ?.slice()
            ?.reverse()
            ?.map((item) => <MoodItemRow item={item} key={item.timestamp} />)
        ) : (
          <Text style={styleHistory.notfound}>No moods to show</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
