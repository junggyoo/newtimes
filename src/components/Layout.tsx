import styled from '@emotion/styled';

import { BottomNavigation } from './BottomNavigation';
import FilterModal from './FilterModal/FIlterModal';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <Container>
      {children}
      <BottomNavigation />
      <FilterModal />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
