import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

export default function BottomNavigation() {
  const nagigate = useNavigate();

  return (
    <Container>
      <div onClick={() => nagigate('/')}>홈</div>
      <div onClick={() => nagigate('/scraps')}>스크랩</div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
`;
