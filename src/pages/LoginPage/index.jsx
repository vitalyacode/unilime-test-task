import { useForm } from 'react-hook-form';
import { Input } from '../../shared/Input';
import './styles.css';
import httpClient from '../../api/httpClient';
import { API_ROUTES } from '../../api/routes';
import QueryString from 'qs';

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      const response = await httpClient.post(
        API_ROUTES.LOGIN,
        QueryString.stringify({ email, password })
      );
    } catch (e) {
      alert('Internal server error. Please try again later');
    }
  };

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
