import { useForm } from 'react-hook-form';
import { Input } from '../../shared/Input';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../store/auth/authActions';
import { getAuth } from '../../store/auth/authSelectors';
import { useNavigate } from 'react-router';
import { ROUTES } from '../../constants/routes';
import { useEffect } from 'react';

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userLoggedIn, error } = useSelector(getAuth);

  const onSubmit = async (data) => {
    try {
      await dispatch(signIn(data));
    } catch (e) {
      alert('Internal server error. Please try again later');
    }
  };

  useEffect(() => {
    if (userLoggedIn) navigate(ROUTES.PRODUCTS);
  }, [navigate, userLoggedIn]);

  useEffect(() => {
    console.log();
    if (error) alert('Internal server error. Please try again later');
  }, [error]);

  return (
    <div style={{ height: '100%' }}>
      <div className="formContainer">
        <form onSubmit={handleSubmit(onSubmit)} className="loginForm">
          <Input
            errorMessage={errors.email}
            className="authInput"
            name={'email'}
            rules={{ required: true }}
            register={register}
          />
          <Input
            errorMessage={errors.password}
            className="authInput"
            type="password"
            name={'password'}
            rules={{ required: true }}
            register={register}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
