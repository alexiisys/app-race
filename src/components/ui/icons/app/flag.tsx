import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const Flag = ({
  color = '#000',
  ...props
}: SvgProps & { color?: string }) => (
  <Svg width={23} height={26} viewBox="0 0 23 26" fill="none" {...props}>
    <Path
      d="M4.5 22V4.90002C4.5 4.90002 5.375 4 8 4C10.625 4 12.375 5.8 15 5.8C17.625 5.8 18.5 4.9 18.5 4.9V15.7C18.5 15.7 17.625 16.6 15 16.6C12.375 16.6 10.625 14.8 8 14.8C5.375 14.8 4.5 15.7 4.5 15.7"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </Svg>
);
