import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Navigation from 'components/Navigation/Navigation';
import { Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ alignItems: 'baseline' }}>
          <Button
            sx={{ marginRight: 2, fontSize: '30px' }}
            color="inherit"
            component={RouterLink}
            to="/"
          >
            Home
          </Button>

          <Navigation />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
