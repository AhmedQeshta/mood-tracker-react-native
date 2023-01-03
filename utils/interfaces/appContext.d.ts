import { IMoodOptionWithTimestamp, IMoodsOptions } from './moods';

export interface IAppContext {
  moodList: IMoodOptionWithTimestamp[];
  handleMoodSelection: (selectedMood: IMoodsOptions) => void;
  handleDeleteMood: (mood: IMoodOptionWithTimestamp) => void;
}

export interface IAppData {
  moodList: IMoodOptionWithTimestamp[];
}
