import { useMemo } from 'react';
import { View, Text } from 'react-native';
import format from 'date-fns/format';
import { styleMoodItemRow } from '../utils/styles/MoodItemRow';
import { MoodItemRowProps } from '../utils/interfaces/moods';

export const MoodItemRow: React.FC<MoodItemRowProps> = ({ item }) => {
  
  const timestamp = useMemo(
    () => format(new Date(item.timestamp), "dd MMM, yyyy 'at' h:mm a"),
    [item.timestamp],
  );

  return (
    <View style={styleMoodItemRow.moodItem}>
      <View style={styleMoodItemRow.iconAndDescription}>
        <Text style={styleMoodItemRow.moodValue}>{item.mood.emoji}</Text>
        <Text style={styleMoodItemRow.moodDescription}>{item.mood.description}</Text>
      </View>
      <Text style={styleMoodItemRow.moodDate}>{timestamp}</Text>
    </View>
  );
};
