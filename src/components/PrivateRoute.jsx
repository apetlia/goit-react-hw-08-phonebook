import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const PrivateRoute = ({ children, redirectTo = '/login' }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? children : <Navigate to={redirectTo} state={location} />;
};
