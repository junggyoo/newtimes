import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import { BottomNavigation } from './BottomNavigation';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Container>
      {children}
      <BottomNavigation />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
