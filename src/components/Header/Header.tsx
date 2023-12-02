import styled from '@emotion/styled';

export default function Header({ children }: React.PropsWithChildren) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  width: 100%;
  padding: 3.2rem 2rem 1rem;
  border-bottom: 1px solid lightgray;
  background-color: #ffffff;
`;
