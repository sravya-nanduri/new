import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_GET_TEST_DATA } from '../../Apis/ApiEndPoints';
import { Get } from '../../Apis/AxiosInterceptor';
import { IUser } from '../../models/customers/dashboard/Dashboard';
import { ICommonResponse } from '../../models/common/Common';
import { CustomAction } from '../../store/customAction';

export const GetTestData = createAsyncThunk(
  "testData",
  async (_,{dispatch}) => {
    const data: IUser[] = await CustomAction(Get(API_GET_TEST_DATA), dispatch, 'testData');
    return data; 
  }
);
