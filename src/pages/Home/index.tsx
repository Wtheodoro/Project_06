import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavBar from '../../components/NavBar';

import { Container } from './styles';

const Home = () => {
  const [denyPermission, setDenyPermission] = useState<Boolean>(false)

  useEffect (() => {
    const token = localStorage.getItem('token')
    if (token) {
      setDenyPermission(false)
    } else {
      setDenyPermission(true)
    }
  }, [])
  return (
    <>
    {/* <NavBar /> */}
    <Container>
    <Typography variant="h5">Welcome Walison!</Typography>
      <div className="btn">
        <Link to="/coins">Coins</Link>
        <Link to="/budget">Budget</Link>
      </div>
    </Container>
    {
      denyPermission &&
      <Redirect to="/" />
    }
    </>
  );
};

export default Home;
