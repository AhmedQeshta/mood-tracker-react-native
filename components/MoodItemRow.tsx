import { useMemo, useCallback } from 'react';
import { View, Text, Pressable, LayoutAnimation } from 'react-native';
import format from 'date-fns/format';
import { styleMoodItemRow } from '../utils/styles/MoodItemRow';
import { MoodItemRowProps } from '../utils/interfaces/moods';
import { useAppContext } from '../utils/providers/App.provider';

export const MoodItemRow: React.FC<MoodItemRowProps> = ({ item }) => {
  const timestamp = useMemo(
    () => format(new Date(item.timestamp), "dd MMM, yyyy 'at' h:mm a"),
    [item.timestamp],
  );

  const { handleDeleteMood } = useAppContext();

  const handleDelete = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    handleDeleteMood(item);
  }, [handleDeleteMood, item]);

  return (
    <View style={styleMoodItemRow.moodItem}>
      <View style={styleMoodItemRow.iconAndDescription}>
        <Text style={styleMoodItemRow.moodValue}>{item.mood.emoji}</Text>
        <Text style={styleMoodItemRow.moodDescription}>{item.mood.description}</Text>
      </View>
      <Text style={styleMoodItemRow.moodDate}>{timestamp}</Text>
      <Pressable onPress={handleDelete}>
        <Text style={styleMoodItemRow.deleteText}>Delete</Text>
      </Pressable>
    </View>
  );
};
