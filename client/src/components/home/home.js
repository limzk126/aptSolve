import React from 'react';
import { Container, Grow } from '@mui/material';
import Problem from './problem/problem';

const Home = () => {
  const numbers = [...Array(10000).keys()];
  return (
    <Grow in>
      <Container>
        {numbers.map((e) => (
          <Problem key={e} />
        ))}
      </Container>
    </Grow>
  );
};

export default Home;
