import { Navigate } from 'react-router';
import { ROUTES } from '../../constants/routes';
import { useSelector } from 'react-redux';
import { getAuth } from '../../store/auth/authSelectors';

export const InvalidRouteRedirecter = () => {
  const { userLoggedIn } = useSelector(getAuth);
  if (userLoggedIn) return <Navigate to={ROUTES.PRODUCTS} />;
  return <Navigate to={ROUTES.LOGIN} />; //fix later
};
