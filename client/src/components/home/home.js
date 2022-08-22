import React from 'react';
import { Container, Grow } from '@mui/material';
import Problem from '../problem/problem';

const Home = () => {
  return (
    <Grow in>
      <Container>
        <Problem />
      </Container>
    </Grow>
  );
};

export default Home;
