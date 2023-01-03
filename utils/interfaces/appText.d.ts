import { TextProps } from 'react-native';

export interface AppTextProps extends TextProps {
  fontFamily?: 'regular' | 'bold' | 'italic';
  size?: 8 | 10 | 12;
}
