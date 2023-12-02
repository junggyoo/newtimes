import styled from '@emotion/styled';

import { Chip } from '../Chip';
import { Icon } from '../Icon';

interface FilterChipsProps {
  type?: 'home' | 'scrap';
}

export default function FilterChips({ type = 'home' }: FilterChipsProps) {
  console.log(type);
  return (
    <Container>
      <Chip startContent={<Icon name="SEARCH" size={16} />}>전체 헤드라인</Chip>
      <Chip startContent={<Icon name="CALENDAR" size={16} />} color="primary">
        전체 날짜
      </Chip>
      <Chip>전체 국가</Chip>
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
