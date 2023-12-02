import styled from '@emotion/styled';

import { BottomNavigation } from './BottomNavigation';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <Container>
      {children}
      <BottomNavigation />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
