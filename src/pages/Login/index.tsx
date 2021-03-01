import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

import { Container } from './styles';

const Login = () => {
  return (
    <Container>
      <SignIn />
      <SignUp />
    </Container>
  );
};

export default Login;
