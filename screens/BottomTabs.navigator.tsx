import { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './Home.screen';
import { History } from './History.screen';
import { Analytics } from './Analytics.screen';
import { HomeIcon, HistoryIcon, AnalyticsIcon } from '../components/icons';
import { themes } from '../utils/styles/themes';
import { IconProps } from './../utils/interfaces/icons.d';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { ScreenOption } from '../utils/interfaces/tabsNavigator';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: FC = () => {
  const screens: ScreenOption[] = [
    {
      name: 'Home',
      component: Home,
      options: { title: "Today's Mood" },
    },
    {
      name: 'History',
      component: History,
      options: { title: 'Past Moods' },
    },
    {
      name: 'Analytics',
      component: Analytics,
      options: { title: 'Fancy Charts' },
    },
  ];

  const screenOptions = (route: RouteProp<ParamListBase>) => ({
    tabBarActiveTintColor: themes.colorBlue,
    tabBarInactiveTintColor: themes.colorGrey,
    tabBarShowLabel: false,
    headerTitleStyle: { fontFamily: themes.fontFamilyBold },
    tabBarIcon: (props: IconProps) => {
      const { name } = route ?? {};
      switch (name) {
        case 'Home':
          return <HomeIcon {...props} />;
        case 'History':
          return <HistoryIcon {...props} />;
        case 'Analytics':
          return <AnalyticsIcon {...props} />;
        default:
          break;
      }
    },
  });

  return (
    <BottomTabs.Navigator screenOptions={({ route }) => screenOptions(route)}>
      {screens?.map(({ name, component, options }) => (
        <BottomTabs.Screen key={name} name={name} component={component} options={options} />
      ))}
    </BottomTabs.Navigator>
  );
};
