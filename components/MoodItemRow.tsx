import { useMemo, useCallback } from 'react';
import { View, Text, Pressable, LayoutAnimation } from 'react-native';
import format from 'date-fns/format';
import { styleMoodItemRow } from '../utils/styles/MoodItemRow';
import { MoodItemRowProps } from '../utils/interfaces/moods';
import { useAppContext } from '../utils/providers/App.provider';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import Reanimated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

const maxSwipe = 80;

export const MoodItemRow: React.FC<MoodItemRowProps> = ({ item }) => {
  const { handleDeleteMood } = useAppContext();
  const offset = useSharedValue(0);

  const timestamp = useMemo(
    () => format(new Date(item.timestamp), "dd MMM, yyyy 'at' h:mm a"),
    [item.timestamp],
  );

  const handleDelete = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    handleDeleteMood(item);
  }, [handleDeleteMood, item]);

  const removeWithDelay = useCallback(() => {
    setTimeout(() => {
      handleDelete();
    }, 250);
  }, [handleDeleteMood]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  const onGestureEvent = useAnimatedGestureHandler(
    {
      onActive: (event) => {
        const xVal = Math.floor(event.translationX);
        offset.value = xVal;
      },
      onEnd: (event) => {
        if (Math.abs(event.translationX) > maxSwipe) {
          offset.value = withTiming(1000 * Math.sign(event.translationX));
          runOnJS(removeWithDelay)();
        } else {
          offset.value = withTiming(0);
        }
      },
    },
    [],
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PanGestureHandler minVelocityX={1} minVelocityY={100} onGestureEvent={onGestureEvent}>
        <Reanimated.View style={[styleMoodItemRow.moodItem, animatedStyle]}>
          <View style={styleMoodItemRow.iconAndDescription}>
            <Text style={styleMoodItemRow.moodValue}>{item.mood.emoji}</Text>
            <Text style={styleMoodItemRow.moodDescription}>{item.mood.description}</Text>
          </View>
          <Text style={styleMoodItemRow.moodDate}>{timestamp}</Text>
          <Pressable onPress={handleDelete}>
            <Text style={styleMoodItemRow.deleteText}>Delete</Text>
          </Pressable>
        </Reanimated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};
