import { StyleSheet } from 'react-native';
import { themes } from './themes';

export const styleHistory = StyleSheet.create({
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
