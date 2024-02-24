import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../api/httpClient';
import { API_ROUTES } from '../../api/routes';
import QueryString from 'qs';

export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }, { rejectWithValue }) => {
    // try {
    const { data } = await httpClient.post(
      API_ROUTES.LOGIN,
      QueryString.stringify({ email, password })
    );
    return data;
    // } catch (error) {
    //   return rejectWithValue(error);
    // }
  }
);

export const logout = createAction('auth/logout');
