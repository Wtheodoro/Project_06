import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

const NavBar = () => {
  return (
    <Container>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/coins">Currency</NavLink>
      <NavLink to="/budget">Budget</NavLink>
    </Container>
  );
};

export default NavBar;
