import { themes } from './themes';
import { StyleSheet } from 'react-native';

export const styleMoodPicker = StyleSheet.create({
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moodItem: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 5,
    backgroundColor: '#fff',
    borderColor: '#fff',
    fontSize: 30,
  },
  selectedMoodItem: {
    borderWidth: 2,
    backgroundColor: themes.colorPurple,
    borderColor: themes.colorWhite,
  },
  descriptionText: {
    color: themes.colorPurple,
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
  },
  moodText: {
    fontSize: 22,
  },
  container: {
    borderWidth: 2,
    borderColor: themes.colorPurple,
    margin: 10,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'space-between',
    height: 230,
    backgroundColor: themes.colorGray,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 20,
    color: themes.colorWhite,
  },
  button: {
    backgroundColor: themes.colorPurple,
    width: 150,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
    padding: 10,
  },
  buttonText: {
    color: themes.colorWhite,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    alignSelf: 'center',
    aspectRatio: 1,
  },
});
