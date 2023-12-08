import styled from '@emotion/styled';

import { Chip } from '../Chip';
import { Icon } from '../Icon';

import { useGlobalStore } from '@/store/global';

interface FilterChipsProps {
  type?: 'home' | 'scrap';
}

export default function FilterChips({ type = 'home' }: FilterChipsProps) {
  const toggleModal = useGlobalStore((state) => state.toggleModal);

  console.log(type);
  return (
    <Container>
      <Chip
        startContent={<Icon name="SEARCH" size={16} />}
        onClick={toggleModal}
      >
        전체 헤드라인
      </Chip>
      <Chip
        startContent={<Icon name="CALENDAR" size={16} />}
        color="primary"
        onClick={toggleModal}
      >
        전체 날짜
      </Chip>
      <Chip onClick={toggleModal}>전체 국가</Chip>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  width: 100%;
  padding: 4rem 2rem 1.2rem;
  border-bottom: 1px solid lightgray;
  background-color: #ffffff;
`;
