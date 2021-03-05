import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Container } from './styles';
import { Avatar, Button, TextField, Typography } from '@material-ui/core';
import { loadTokenRequest } from '../../store/ducks/logIn/actions';
import { Redirect } from 'react-router-dom';


const SignIn = () => {
  const dispatch = useDispatch()
  const inputEmail = useRef<HTMLInputElement>(null)
  const inputPassword = useRef<HTMLInputElement>(null)

  const callSignIn = () => {
    const info = {
      email: inputEmail?.current?.value,
      password: inputPassword?.current?.value,
    }
    dispatch(loadTokenRequest(info))
  }

  return (
    <>
      <Container>
        <h1>SignIn</h1>
        <Avatar alt="Walison" src="https://github.com/wtheodoro.png" />

        <Typography variant="h5">Welcome back, Walison!</Typography>
        <Typography variant="subtitle1">Sign in to continue</Typography>

        <TextField id="standard-basic" label="Email Address" inputRef={inputEmail} fullWidth/>
        <TextField id="standard-basic" label="Password" inputRef={inputPassword} fullWidth/>
        <Button variant="contained" color="primary" onClick={callSignIn}>Sign in</Button>
      </Container>
    </>
  );
};

export default SignIn;
