import React from 'react';
import GiftIcon from './gift.svg';

interface GiftTabIconProps {
  size: number;
  color: string;
}

export default function GiftTabIcon({ size, color }: GiftTabIconProps): React.JSX.Element {
  return (
    <GiftIcon
      width={size}
      height={size}
      stroke={color}
      fill="none"
    />
  );
}
