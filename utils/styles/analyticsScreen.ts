import { StyleSheet } from 'react-native';
import { themes } from './themes';

export const styleAnalytics = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notfound: {
    textAlign: 'center',
    fontSize: 20,
    color: themes.colorPurple,
    fontFamily: themes.fontFamilyBold,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '80%',
  },
});
