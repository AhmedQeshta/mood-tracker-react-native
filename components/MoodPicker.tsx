import { View, Text, Pressable } from 'react-native';
import { FC, useState, useCallback } from 'react';
import { IMoodsOptions, MoodPickerProps } from '../utils/interfaces/moods';
import { styleMoodPicker } from '../utils/styles/MoodPicker';

const moodOptions: IMoodsOptions[] = [
  { emoji: '👨‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
];

export const MoodPicker: FC<MoodPickerProps> = ({ handleMoodSelection }) => {
  const [selectedMood, setSelectedMood] = useState<IMoodsOptions>();

  const handleSelection = useCallback(() => {
    if (selectedMood) {
      handleMoodSelection(selectedMood!);
      setSelectedMood(undefined);
    }
  }, [handleMoodSelection, selectedMood]);

  return (
    <View style={styleMoodPicker.container}>
      <Text style={styleMoodPicker.heading}>How are you right now?</Text>
      <View style={styleMoodPicker.moodList}>
        {moodOptions?.map((option) => (
          <View key={option.emoji}>
            <Pressable
              onPress={() => setSelectedMood(option)}
              style={[
                styleMoodPicker.moodItem,
                option.emoji === selectedMood?.emoji ? styleMoodPicker.selectedMoodItem : undefined,
              ]}>
              <Text style={styleMoodPicker.moodText}>{option.emoji}</Text>
            </Pressable>
            <Text style={styleMoodPicker.descriptionText}>
              {selectedMood?.emoji === option.emoji ? option.description : ' '}
            </Text>
          </View>
        ))}
      </View>
      <Pressable style={styleMoodPicker.button} onPress={handleSelection}>
        <Text style={styleMoodPicker.buttonText}>Choose</Text>
      </Pressable>
    </View>
  );
};
