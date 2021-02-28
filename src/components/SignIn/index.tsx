import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux'
import { Container } from './styles';
import { Avatar, Button, TextField, Typography } from '@material-ui/core';
import { loadTokenRequest } from '../../store/ducks/logIn/actions';
import { Redirect } from 'react-router-dom';


const SignIn = () => {

  const [permission, setPermission] = useState<Boolean>(false)
  const [reRender, setReRender] = useState<Boolean>(true)

  const dispatch = useDispatch()
  const inputEmail = useRef<HTMLInputElement>(null)
  const inputPassword = useRef<HTMLInputElement>(null)

  const callSignIn = async () => {
    const info = {
      email: inputEmail?.current?.value,
      password: inputPassword?.current?.value,
    }
    dispatch(loadTokenRequest(info))

    await seeToken()
  }

  const seeToken = () => {
    const token = localStorage.getItem('token')
    if (token) {
     setPermission(true) 
    }
    setReRender(!reRender)
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
      {
        permission &&
        <Redirect to="/home" />
      }
    </>
  );
};

export default SignIn;