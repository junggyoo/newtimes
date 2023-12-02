import styled from '@emotion/styled';
import News from './News';

export default function NewsList() {
  return (
    <Container>
      <News />
      <News />
      <News />
      <News />
      <News />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  height: 100%;
  padding: 2rem;
`;
