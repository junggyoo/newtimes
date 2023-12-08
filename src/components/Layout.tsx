import styled from '@emotion/styled';

import { BottomNavigation } from './bottom-navigation';
import FilterModal from './filter-modal';

import { useGlobalStore } from '@/store/global';

export default function Layout({ children }: React.PropsWithChildren) {
  const isModalOpen = useGlobalStore((state) => state.isModalOpen);

  return (
    <Container>
      {children}
      <BottomNavigation />
      {isModalOpen && <FilterModal />}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
