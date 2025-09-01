import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const Map = ({
  color = '#2654A4',
  strokeWidth = 2,
  ...props
}: SvgProps) => (
  <Svg width={25} height={22} viewBox="0 0 25 22" fill="none" {...props}>
    <Path
      d="M8.75 21L1.25 17.25V1L8.75 4.75M8.75 21L16.25 17.25M8.75 21V4.75M16.25 17.25L23.75 21V4.75L16.25 1M16.25 17.25V1M8.75 4.75L16.25 1"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
  </Svg>
);
