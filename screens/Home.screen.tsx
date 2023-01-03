import { FC } from 'react';
import { ImageBackground } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { useAppContext } from '../utils/providers/App.provider';
import { styleHome } from '../utils/styles/homeScreen';

const imageUrl =
  'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1766&q=80';

export const Home: FC = () => {
  const { handleMoodSelection } = useAppContext();
  return (
    <ImageBackground source={{ uri: imageUrl }} style={styleHome.container}>
      <MoodPicker handleMoodSelection={handleMoodSelection} />
    </ImageBackground>
  );
};
