import React from 'react';
import WishIcon from './list.svg';

interface WishTabIconProps {
  size: number;
  color: string;
}

export default function WishTabIcon({ size, color }: WishTabIconProps): React.JSX.Element {
  return (
    <WishIcon
      width={size}
      height={size}
      stroke={color}
      fill="none"
    />
  );
}
