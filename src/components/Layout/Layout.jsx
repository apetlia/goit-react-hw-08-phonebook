import ButtonAppBar from 'components/ButtonAppBar/ButtonAppBar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <ButtonAppBar />
      <Outlet />
    </>
  );
};

export default Layout;
