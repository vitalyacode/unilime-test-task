import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import { getAuth } from '../../store/auth/authSelectors';
import { logout } from '../../store/auth/authActions';
import { ROUTES } from '../../constants/routes';
import { useNavigate } from 'react-router';

export const Header = () => {
  const { userLoggedIn, user } = useSelector(getAuth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logout());
    navigate(ROUTES.LOGIN);
  };

  return (
    <header className="header">
      <h3>Test task</h3>
      <div className="user">
        <p>{userLoggedIn ? user.email : 'User not logged in'}</p>
        {userLoggedIn && (
          <button className="logOut" onClick={handleLogOut}>
            Log out
          </button>
        )}
      </div>
    </header>
  );
};
