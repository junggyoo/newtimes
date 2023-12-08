import styled from '@emotion/styled';

import { Chip } from '../chip';
import { Icon } from '../icon';

import { useGlobalStore } from '@/store/global';

interface FilterChipsProps {
  type?: 'home' | 'scrap';
}

export default function FilterChips({ type = 'home' }: FilterChipsProps) {
  const { filter, toggleModal } = useGlobalStore((state) => ({
    filter: state.filter,
    toggleModal: state.toggleModal,
  }));

  const getCountires = () => {
    if (filter.countries.length === 0) return '전체 국가';
    if (filter.countries.length === 1) return filter.countries[0];
    return `${filter.countries[0]} 외 ${filter.countries.length - 1}개 국가`;
  };

  const countries = getCountires();
  const headline = filter.headline ? filter.headline : '전체 헤드라인';
  const date = filter.date ? filter.date.replace(/-/g, '.') : '전체 날짜';

  console.log(type);
  return (
    <Container>
      <Chip
        startContent={<Icon name="SEARCH" size={16} />}
        onClick={toggleModal}
        color={headline === '전체 헤드라인' ? 'default' : 'primary'}
      >
        {headline}
      </Chip>
      <Chip
        startContent={<Icon name="CALENDAR" size={16} />}
        color={date === '전체 날짜' ? 'default' : 'primary'}
        onClick={toggleModal}
      >
        {date}
      </Chip>
      <Chip
        color={countries === '전체 국가' ? 'default' : 'primary'}
        onClick={toggleModal}
      >
        {countries}
      </Chip>
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
