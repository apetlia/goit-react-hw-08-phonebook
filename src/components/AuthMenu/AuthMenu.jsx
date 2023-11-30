import { Box, Button } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export const AuthMenu = () => {
  return (
    <Box>
      <Button color="inherit" component={RouterLink} to="/login">
        Login
      </Button>
      <Button color="inherit" component={RouterLink} to="/register">
        Registration
      </Button>
    </Box>
  );
};
