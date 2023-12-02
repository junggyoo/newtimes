import styled from '@emotion/styled';

import News from './News';

const VIEW_HEIGHT = window.innerHeight;
const HEADER_HEIGHT = 87;
const BOTTOM_HEIGHT = 85;

export default function NewsList() {
  return (
    <Container height={VIEW_HEIGHT}>
      <News />
      <News />
      <News />
      <News />
      <News />
      <News />
      <News />
      <News />
      <News />
      <News />
      <News />
      <News />
    </Container>
  );
}

const Container = styled.section<{ height: number }>`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 2rem;

  height: ${({ height }) => (height - (HEADER_HEIGHT + BOTTOM_HEIGHT)) / 10}rem;
  overflow-y: scroll;
`;
