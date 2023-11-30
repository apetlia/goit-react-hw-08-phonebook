import { Button } from '@mui/material';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Button
        sx={{ marginRight: 'auto' }}
        color="inherit"
        component={RouterLink}
        to="/contacts"
      >
        Contacts
      </Button>

      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </>
  );
};

export default Navigation;
