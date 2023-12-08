import { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import DateInput from '@/components/date-input';

import { useGlobalStore } from '@/store/global';

const COUNTRIES = [
  '대한민국',
  '중국',
  '일본',
  '미국',
  '북한',
  '러시아',
  '프랑스',
  '영국',
];

export default function FilterModal() {
  const { filter, toggleModal, setFilter } = useGlobalStore((state) => ({
    filter: state.filter,
    toggleModal: state.toggleModal,
    setFilter: state.setFilter,
  }));

  const [selectedCountries, setSelectedCountries] = useState<string[]>(
    filter.countries
  );
  const [selectedDate, setSelectedDate] = useState(filter.date);
  const [selectedHeadline, setSelectedHeadline] = useState(filter.headline);

  const handleCountryClick = (country: string) => {
    if (selectedCountries.includes(country)) {
      setSelectedCountries((prev: string[]) =>
        prev.filter((c) => c !== country)
      );
    } else {
      setSelectedCountries((prev: string[]) => [...prev, country]);
    }
  };

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  const handleHeadlineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedHeadline(e.target.value);
  };

  const handleModalClose = (e: React.SyntheticEvent) => {
    if (e.target !== e.currentTarget) return;
    toggleModal();
  };

  const handleFilterApply = () => {
    setFilter({
      headline: selectedHeadline,
      date: selectedDate,
      countries: selectedCountries,
    });
    toggleModal();
  };

  return (
    <Wrapper onClick={handleModalClose}>
      <Container>
        <Filter>
          <Title>헤드라인</Title>
          <Input
            placeholder="검색하실 헤드라인을 입력해주세요."
            value={selectedHeadline}
            onChange={handleHeadlineChange}
          />
        </Filter>
        <Filter>
          <Title>날짜</Title>
          <DateInput
            placeholder="날짜를 선택해주세요."
            value={selectedDate}
            onChange={handleDateChange}
          />
        </Filter>
        <Filter>
          <Title>국가</Title>
          <Countries>
            {COUNTRIES.map((country) => {
              return (
                <Country
                  key={country}
                  isSelected={selectedCountries.includes(country)}
                  onClick={() => handleCountryClick(country)}
                >
                  {country}
                </Country>
              );
            })}
          </Countries>
        </Filter>
        <Button onClick={handleFilterApply}>필터 적용하기</Button>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  padding: 2rem;
  border-radius: 1.6rem;
  background-color: #fff;
`;

const Filter = styled.div`
  padding: 1rem;
`;

const Title = styled.h2`
  height: 2.4rem;
  line-height: 2.4rem;
  margin-bottom: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  height: 4.4rem;
  padding: 1rem 2rem;
  color: #6d6d6d;
  border: 0.1rem solid #c4c4c4;
  border-radius: 0.8rem;

  &::placeholder {
    color: #c4c4c4;
    font-size: 1.4rem;
    font-weight: 400;
  }

  &:focus {
    outline: none;
    border: 0.1rem solid #3478f6;
  }
`;

const Countries = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Country = styled.div<{ isSelected?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 3.4rem;
  padding: 0.6rem 1.2rem;

  ${({ isSelected }) =>
    isSelected
      ? css`
          background-color: #82b0f4;
          color: #fff;
        `
      : css`
          background-color: #fff;
          color: #6d6d6d;
        `}

  font-size: 1.4rem;
  font-weight: 400;
  border: 0.1rem solid #f2f2f2;
  border-radius: 3rem;
`;

const Button = styled.button`
  width: 100%;
  height: 6rem;
  border: none;
  border-radius: 1.6rem;
  background-color: #3478f6;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
`;
