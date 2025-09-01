import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const Flash = ({ color = '#2654A4', ...props }: SvgProps) => (
  <Svg width={17} height={26} viewBox="0 0 17 26" fill="none" {...props}>
    <Path
      d="M0.25066 13.6827L10.9191 0.589541C11.2278 0.210766 11.8355 0.515173 11.717 0.989179L9.49917 9.86056C9.42704 10.1491 9.64526 10.4286 9.94267 10.4286H16.3595C16.7507 10.4286 16.9612 10.8879 16.7058 11.1842L4.69934 25.1117C4.3677 25.4964 3.7499 25.1343 3.92348 24.6569L7.41984 15.0419C7.52825 14.7438 7.30746 14.4286 6.99022 14.4286H0.605053C0.219826 14.4286 0.00732246 13.9813 0.25066 13.6827Z"
      fill={color}
    />
  </Svg>
);
