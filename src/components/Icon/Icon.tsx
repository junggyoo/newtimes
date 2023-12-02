import { cloneElement } from 'react';

import { IconMap, Icons } from './IconMap';

interface IconProps {
  name: keyof Icons;
  width?: string;
  height?: string;
  color?: string;
}

export default function Icon({
  name,
  width = '24',
  height = '24',
  color = '#fff',
}: IconProps) {
  const IconSVG = IconMap[name];

  return (
    <i
      style={{
        width,
        height,
        fill: color,
      }}
    >
      {cloneElement(IconSVG, {
        style: { stroke: 'currentColor', width, height },
      })}
    </i>
  );
}
