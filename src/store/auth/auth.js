import { createSlice } from '@reduxjs/toolkit';
import { signIn } from './authActions';

const initialState = {
  user: {},
  userToken: null,
  userLoggedIn: false,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.error = null;
        state.userLoggedIn = false;
        state.loading = true;
      })
      .addCase(signIn.rejected, (state, { payload }) => {
        state.error = payload.response.data.message;
        state.loading = false;
      })
      .addCase(signIn.fulfilled, (state, { payload: { user, access_token } }) => {
        state.user = user;
        state.access_token = access_token;
        state.userLoggedIn = true;
        state.loading = false;
      });
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
