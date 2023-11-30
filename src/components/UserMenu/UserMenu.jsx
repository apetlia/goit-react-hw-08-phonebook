import { Box, Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { selectEmail } from 'redux/auth/selectors';

const UserMenu = () => {
  const email = useSelector(selectEmail);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <Box>
      <span>{email}</span>
      <Button color="inherit" onClick={handleClick}>
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
