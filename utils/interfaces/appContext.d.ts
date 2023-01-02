import { IMoodOptionWithTimestamp, IMoodsOptions } from "./moods";

export interface IAppContext {
  moodList : IMoodOptionWithTimestamp[];
  handleMoodSelection: (selectedMood: IMoodsOptions) => void;
}