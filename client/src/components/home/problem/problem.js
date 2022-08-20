import React from 'react';
import { Grid } from '@mui/material';

const Problem = () => {
  return (
    <Grid container>
      <Grid item xs={2}>
        this is the problem
      </Grid>
      <Grid item xs={1}>
        5
      </Grid>
      <Grid item xs={1}>
        23
      </Grid>
      <Grid item xs={1}>
        YES
      </Grid>
      <Grid item xs={1}>
        comments
      </Grid>
    </Grid>
  );
};

export default Problem;
