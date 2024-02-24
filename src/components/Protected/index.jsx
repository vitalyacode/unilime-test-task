import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { ROUTES } from '../../constants/routes';
import { getAuth } from '../../store/auth/authSelectors';

export const Protected = ({ children }) => {
  const { userLoggedIn } = useSelector(getAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userLoggedIn) {
      navigate(ROUTES.LOGIN);
    }
  }, [navigate, userLoggedIn]);

  if (userLoggedIn) return children;
  return null;
};
