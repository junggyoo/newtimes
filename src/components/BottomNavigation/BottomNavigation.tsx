import styled from '@emotion/styled';

import BottomNavItem from './BottomNavItem';

export default function BottomNavigation() {
  return (
    <Container>
      <BottomNavItem to="/" label="홈" icon="home" />
      <BottomNavItem to="/scraps" label="스크랩" icon="scrap" />
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 8.5rem;
  padding: 2rem 8rem;
  border-radius: 3rem;
  background-color: black;
  color: white;
  z-index: 100;
`;
