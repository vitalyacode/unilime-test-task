import { Navigate } from 'react-router';
import { ROUTES } from '../../constants/routes';

export const InvalidRouteRedirecter = () => {
  return <Navigate to={ROUTES.LOGIN} />; //fix later
};
