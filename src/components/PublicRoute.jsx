import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const PublicRoute = ({ children, redirectTo = '/' }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return !isLoggedIn ? (
    children
  ) : (
    <Navigate to={location.state || redirectTo} />
  );
};
