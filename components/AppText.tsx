import React from 'react';
import { FC, useMemo } from 'react';
import { Text } from 'react-native';
import { AppTextProps } from '../utils/interfaces/appText';
import { themes } from '../utils/styles/themes';

export const AppText: FC<AppTextProps> = ({
  children,
  fontFamily,
  style = { color: 'while' },
  ...props
}) => {
  const fontStyle = useMemo(() => {
    if (fontFamily === 'bold') return themes.fontFamilyBold;
    if (fontFamily === 'regular') return themes.fontFamilyRegular;
    if (fontFamily === 'italic') return themes.fontFamilyLight;
  }, [fontFamily]);

  return (
    <Text
      {...props}
      style={[
        style,
        {
          fontFamily: fontStyle,
        },
      ]}>
      {children}
    </Text>
  );
};
