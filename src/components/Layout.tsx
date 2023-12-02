import { PropsWithChildren } from 'react';

import { BottomNavigation } from './BottomNavigation';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      {children}
      <BottomNavigation />
    </div>
  );
}
