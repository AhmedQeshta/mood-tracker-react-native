import { IMoodOptionWithTimestamp, IMoodsOptions } from './moods';

export interface IAppContext {
  moodList: IMoodOptionWithTimestamp[];
  handleMoodSelection: (selectedMood: IMoodsOptions) => void;
}

export interface IAppData {
  moodList: IMoodOptionWithTimestamp[];
}
