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
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8.5rem;
  padding: 2rem 8rem;
  margin: auto 0;
  border-radius: 3rem;
  background-color: black;
  color: white;
  z-index: 10;
`;
