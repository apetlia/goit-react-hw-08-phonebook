import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing, selectToken } from 'redux/auth/selectors';
import { lazy, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './Layout/Layout';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { getUser } from 'redux/auth/operations';

const Contacts = lazy(() => import('pages/Contacts'));
const SignUp = lazy(() => import('pages/Register'));
const SignIn = lazy(() => import('pages/Login'));
const Home = lazy(() => import('pages/Home'));

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
