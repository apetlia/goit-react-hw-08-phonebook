import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing, selectToken } from 'redux/auth/selectors';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './Layout/Layout';
import Contacts from 'pages/Contacts';
import SignUp from 'pages/Register';
import SignIn from 'pages/Login';
import Home from 'pages/Home';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { getUser } from 'redux/auth/operations';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    if (token) {
      dispatch(getUser());
    }
  }, [dispatch, token]);

  return (
    <>
      {isRefreshing ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <Contacts />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path="login"
                element={
                  <PublicRoute>
                    <SignIn />
                  </PublicRoute>
                }
              ></Route>
              <Route
                path="register"
                element={
                  <PublicRoute>
                    <SignUp />
                  </PublicRoute>
                }
              ></Route>
              <Route path="*" element={<h1>Not Found</h1>} />
            </Route>
          </Routes>
        </>
      )}
      <ToastContainer />
    </>
  );
};
