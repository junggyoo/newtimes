import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import { Icons } from '../Icon/IconMap';
import { Icon } from '../Icon';

interface BottomNavItemProps {
  label: string;
  icon: keyof Icons;
  to: string;
}

export default function BottomNavItem({ label, icon, to }: BottomNavItemProps) {
  return (
    <NavItem to={to}>
      <Icon name={icon} />
      <Label>{label}</Label>
    </NavItem>
  );
}

const NavItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #6d6d6d;

  &.active {
    color: #fff;
  }
`;

const Label = styled.div`
  margin-top: 0.5rem;
  font-size: 1.4rem;
`;
