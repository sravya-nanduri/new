import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILoginSlice } from '../models/login/Login';
import { LoginSubmit } from './LoginAction';

const initialState: ILoginSlice = {
  userDetails: null,
  isLogin: false,
};

const LoginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(LoginSubmit.fulfilled, (state, action) => {
        state.userDetails = action.payload;
        state.isLogin = true;
      });
    },
});

export default LoginSlice.reducer;
