import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

import { Container } from './styles';

const Login = () => {
  const[permission, setPermission] = useState<boolean>(false)
  const containToken = useSelector((state: any) => state.reducerToken.accessToken)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setPermission(true)
    }
  }, [containToken])
  return (
    <Container>
      <SignIn />
      <SignUp />
      {
        permission &&
        <Redirect to="/home" />
      }
    </Container>
  );
};

export default Login;
