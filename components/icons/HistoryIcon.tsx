import { FC } from 'react';
import { Svg, Path, Circle } from 'react-native-svg';
import { IconProps } from '../../utils/interfaces/icons';

export const HistoryIcon: FC<IconProps> = ({ size = 40, color = 'teal' }) => {
  return (
    <Svg viewBox="0 0 60.123 60.123" width={size} height={size} fill={color}>
      <Path d="M57.124 51.893H16.92a3 3 0 110-6h40.203a3 3 0 01.001 6zM57.124 33.062H16.92a3 3 0 110-6h40.203a3 3 0 01.001 6zM57.124 14.231H16.92a3 3 0 110-6h40.203a3 3 0 01.001 6z" />
      <Circle cx={4.029} cy={11.463} r={4.029} />
      <Circle cx={4.029} cy={30.062} r={4.029} />
      <Circle cx={4.029} cy={48.661} r={4.029} />
    </Svg>
  );
};
