import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { FC, useEffect } from 'react';
import { BottomTabsNavigator } from './screens/BottomTabs.navigator';
import { AppProvider } from './utils/providers/App.provider';
import { useFonts } from 'expo-font';
import { Platform, UIManager } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App: FC = () => {
  const [fontsLoaded] = useFonts({
    'Kalam-Bold': require('./assets/fonts/Kalam-Bold.ttf'),
    'Kalam-Regular': require('./assets/fonts/Kalam-Regular.ttf'),
    'Kalam-Light': require('./assets/fonts/Kalam-Regular.ttf'),
  });

  useEffect(() => {
    SplashScreen?.hide();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
