import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const Motor = ({ color = '#2654A4', strokeWidth=2, ...props }: SvgProps) => (
  <Svg width={28} height={22} viewBox="0 0 28 22" fill="none" {...props}>
    <Path
      d="M16.8571 5.28571V1M12.5714 1H21.1429M5.42857 11H1.14285M1.14285 6.71429V15.2857M26.8571 9.57143V21M9.71428 11H9.72857M14 11H14.0143M18.2857 11H18.3M5.42857 5.28571V16.7143H8.28571L11.1429 21H22.5714V8.14286L19.7143 5.28571H5.42857Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </Svg>
);
