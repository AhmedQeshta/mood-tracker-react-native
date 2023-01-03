import { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './Home.screen';
import { History } from './History.screen';
import { Analytics } from './Analytics.screen';
import { HomeIcon, HistoryIcon, AnalyticsIcon } from '../components/icons';
import { themes } from '../utils/styles/themes';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: themes.colorBlue,
        tabBarInactiveTintColor: themes.colorGrey,
        tabBarShowLabel: false,
        headerTitleStyle: { fontFamily: themes.fontFamilyBold },
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            return <HomeIcon color={color} size={size} />;
          }

          if (route.name === 'History') {
            return <HistoryIcon color={color} size={size} />;
          }

          if (route.name === 'Analytics') {
            return <AnalyticsIcon color={color} size={size} />;
          }

          return null;
        },
      })}>
      <BottomTabs.Screen name="Home" component={Home} options={{ title: "Today's Mood" }} />
      <BottomTabs.Screen name="History" component={History} options={{ title: 'Past Moods' }} />
      <BottomTabs.Screen
        name="Analytics"
        component={Analytics}
        options={{ title: 'Fancy Charts' }}
      />
    </BottomTabs.Navigator>
  );
};
