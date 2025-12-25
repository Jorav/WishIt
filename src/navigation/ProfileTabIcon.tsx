import React from 'react';
import ProfileIcon from './profile.svg';

interface ProfileTabIconProps {
  size: number;
  color: string;
}

export default function ProfileTabIcon({ size, color }: ProfileTabIconProps): React.JSX.Element {
  return (
    <ProfileIcon
      width={size}
      height={size}
      stroke={color}
      fill="none"
    />
  );
}
