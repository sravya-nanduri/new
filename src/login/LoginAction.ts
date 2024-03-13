import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_POST_LOGIN_SUBMIT } from '../Apis/ApiEndPoints';
import { Post } from '../Apis/AxiosInterceptor';
import { ILoginRequestParams } from '../models/login/Login';
import { CustomAction } from '../store/customAction';

export const LoginSubmit = createAsyncThunk(
  "login",
  async (requestParams: ILoginRequestParams,{dispatch}) => {
    const data: any = await CustomAction(Post(API_POST_LOGIN_SUBMIT, requestParams), dispatch, 'login');
    if (data) {
      document.cookie = "authenticated=true";
      document.cookie = "roleName=customer";
    }
    return data; 
  }
);
