import { cloneElement } from 'react';

import { IconMap, Icons } from './IconMap';

interface IconProps {
  name: keyof Icons;
  size?: number;
  width?: number;
  height?: number;
  color?: string;
}

export default function Icon({
  name,
  size,
  width,
  height,
  color = '#fff',
}: IconProps) {
  const IconSVG = IconMap[name];

  return (
    <i
      style={{
        width: size || width || 24,
        height: size || height || 24,
        fill: color,
      }}
    >
      {cloneElement(IconSVG, {
        style: {
          width: size || width || 24,
          height: size || height || 24,
          fill: color,
        },
      })}
    </i>
  );
}
