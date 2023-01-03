import { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { useAppContext } from '../utils/providers/App.provider';

export const Home: FC = () => {
  const {  handleMoodSelection } = useAppContext();
  return (
    <View style={styles.container}>
      <MoodPicker handleMoodSelection={handleMoodSelection} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
