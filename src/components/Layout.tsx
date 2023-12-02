import { PropsWithChildren } from 'react';

import BottomNavigation from './BottmNavigation';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      {children}
      <BottomNavigation />
    </div>
  );
}
