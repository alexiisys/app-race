import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const Speed = ({
  color = '#2654A4',
  ...props
}: SvgProps & { color?: string }) => (
  <Svg width={12} height={11} viewBox="0 0 12 11" fill="none" {...props}>
    <Path
      d="M6.55556 6.30311L8.22222 3.52534M3.77778 3.52534H3.78333M6 2.41423H6.00556M9.33333 5.74756H9.33889M2.66667 5.74756H2.67222M7.11111 7.41423C7.11111 8.02788 6.61365 8.52534 6 8.52534C5.38635 8.52534 4.88889 8.02788 4.88889 7.41423C4.88889 6.80058 5.38635 6.30311 6 6.30311C6.61365 6.30311 7.11111 6.80058 7.11111 7.41423ZM11 5.74756C11 8.50898 8.76142 10.7476 6 10.7476C3.23858 10.7476 1 8.50898 1 5.74756C1 2.98613 3.23858 0.747559 6 0.747559C8.76142 0.747559 11 2.98613 11 5.74756Z"
      stroke={color}
      strokeWidth={0.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </Svg>
);
