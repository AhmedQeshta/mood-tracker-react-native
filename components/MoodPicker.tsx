import { View, Text, Pressable, Image } from 'react-native';
import { FC, useState, useCallback } from 'react';
import { IMoodsOptions, MoodPickerProps } from '../utils/interfaces/moods';
import { styleMoodPicker } from '../utils/styles/MoodPicker';
import Reanimated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
const imageSrc = require('../assets/butterflies.png');

const ReanimatedPressable = Reanimated.createAnimatedComponent(Pressable);

const moodOptions: IMoodsOptions[] = [
  { emoji: '👨‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
];

export const MoodPicker: FC<MoodPickerProps> = ({ handleMoodSelection }) => {
  const [selectedMood, setSelectedMood] = useState<IMoodsOptions>();
  const [hasSelected, setHasSelected] = useState(false);

  const buttonStyle = useAnimatedStyle(
    () => ({
      opacity: selectedMood ? withTiming(1) : withTiming(0.5),
      transform: [{ scale: selectedMood ? withTiming(1) : 0.8 }],
    }),
    [selectedMood],
  );

  const handleSelection = useCallback(() => {
    if (selectedMood) {
      handleMoodSelection(selectedMood!);
      setSelectedMood(undefined);
      setHasSelected(true);
    }
  }, [handleMoodSelection, selectedMood]);

  if (hasSelected) {
    return (
      <View style={styleMoodPicker.container}>
        <Image source={imageSrc} style={styleMoodPicker.image} />
        <Pressable style={styleMoodPicker.button} onPress={() => setHasSelected(false)}>
          <Text style={styleMoodPicker.buttonText}>Back</Text>
        </Pressable>
      </View>
    );
  }

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
      <ReanimatedPressable style={[styleMoodPicker.button, buttonStyle]} onPress={handleSelection}>
        <Text style={styleMoodPicker.buttonText}>Choose</Text>
      </ReanimatedPressable>
    </View>
  );
};
