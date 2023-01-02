export interface IMoodsOptions {
  emoji: string;
  description: string;
}

export interface IMoodOptionWithTimestamp {
  mood: IMoodsOptions;
  timestamp: number;
}

export interface MoodItemRowProps {
  item: IMoodOptionWithTimestamp;
}

export interface MoodPickerProps {
  handleMoodSelection: (selectedMood: IMoodsOptions) => void;
}
