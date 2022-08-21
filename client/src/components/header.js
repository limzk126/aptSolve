import React from 'react';
import { AppBar, Typography, Toolbar, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  const navItems = [
    { text: 'HOME', path: '/' },
    {
      text: 'CREATE',
      path: '/create',
    },
  ];

  return (
    <AppBar component="nav" position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          aptSolve
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button key={item.text} sx={{ color: '#fff' }}>
              <Link to={item.path} style={{ color: '#fff' }}>
                {item.text}
              </Link>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
