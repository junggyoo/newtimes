import styled from '@emotion/styled';

import BottomNavItem from './BottomNavItem';

export default function BottomNavigation() {
  return (
    <Container>
      <BottomNavItem to="/" label="홈" icon="HOME" />
      <BottomNavItem to="/scraps" label="스크랩" icon="SCRAP" />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 56rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8.5rem;
  padding: 2rem 8rem;
  border-radius: 3rem;
  background-color: black;
  color: white;
  z-index: 10;
`;
