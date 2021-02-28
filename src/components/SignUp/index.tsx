import { Typography, TextField, Button } from '@material-ui/core';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { loadTokenRequestUp } from '../../store/ducks/logIn/actions';

import { Container } from './styles';

const SignUp = () => {

  const dispatch = useDispatch()
  const inputEmail = useRef<HTMLInputElement>(null)
  const inputPassword = useRef<HTMLInputElement>(null)

  const callSignUp = () => {
    const info = {
      email: inputEmail?.current?.value,
      password: inputPassword?.current?.value,
    }
    dispatch(loadTokenRequestUp(info))
  }
  return (
    <Container>
      <h1>SignUp</h1>

      <Typography variant="h5">Welcome back, Walison!</Typography>
      <Typography variant="subtitle1">Sign in to continue</Typography>

      <TextField id="standard-basic" label="Name" fullWidth/>
      <TextField id="standard-basic" label="Email Address" inputRef={inputEmail} fullWidth/>
      <TextField id="standard-basic" label="Password" inputRef={inputPassword} fullWidth/>
      <TextField id="standard-basic" label="Confirm Password" fullWidth/>
      <Button variant="contained" color="primary" onClick={callSignUp} fullWidth>Sign up</Button>
    </Container>
  );
};

export default SignUp;
