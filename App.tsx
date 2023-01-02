import { NavigationContainer } from '@react-navigation/native';
import { FC } from 'react';
import { BottomTabsNavigator } from './screens/BottomTabs.navigator';
import { AppProvider } from './utils/providers/App.provider';

const App: FC = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
