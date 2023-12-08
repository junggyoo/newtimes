import { css } from '@emotion/react';
import styled from '@emotion/styled';

type ChipColor = 'default' | 'primary';

interface ChipProps {
  color?: ChipColor;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Chip({
  color = 'default',
  startContent,
  endContent,
  children,
  onClick,
}: ChipProps) {
  return (
    <Container color={color} onClick={onClick}>
      {startContent && startContent}
      {children}
      {endContent && endContent}
    </Container>
  );
}

const getChipStyle = (color: ChipColor) => {
  switch (color) {
    case 'primary':
      return css`
        color: #3478f6;
        border: 0.1rem solid #82b0f4;
      `;
    case 'default':
    default:
      return css`
        color: #6d6d6d;
        border: 0.1rem solid #c4c4c4;
      `;
  }
};

const Container = styled.span(
  {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.6rem 1.2rem 0.4rem 1.2rem',
    marginRight: '0.5rem',
    height: '3.4rem',
    borderRadius: '3rem',
    fontSize: '1.4rem',
    cursor: 'pointer',
  },
  ({ color }: { color: ChipColor }) => ({
    ...getChipStyle(color),
  })
);
