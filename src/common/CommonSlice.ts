import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICommon } from '../models/common/Common';

const initialState: ICommon = {
    isLoading: false,
    isSuccess: false,
    message: null,
    isError: false,
    displayMsg: false,
    calledReducerType: null,
};

const CommonSlice = createSlice({
    name: 'common',
    initialState: initialState,
    reducers: {
      setIsLoading: (state, action: PayloadAction<boolean>) => {
        state.isLoading = action.payload;
      },
      setIsSuccess: (state, action: PayloadAction<boolean>) => {
        state.isSuccess = action.payload;
      },
      setIsError: (state, action: PayloadAction<boolean>) => {
        state.isError = action.payload;
      },
      setMessage: (state, action: PayloadAction<string>) => {
        state.message = action.payload;
      },
      setDisplayMsg: (state, action: PayloadAction<boolean>) => {
        state.displayMsg = action.payload;
      },
      setCalledReducerType: (state, action: PayloadAction<string | null>) => {
        state.calledReducerType = action.payload;
      },
      resetCommonSlice: (state) => {
        state.message = null;
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = false;
        state.calledReducerType = null;
        state.displayMsg = false;
      },
    },
});

export const { setIsLoading, setIsSuccess, setMessage, setIsError, resetCommonSlice, setDisplayMsg, setCalledReducerType } = CommonSlice.actions;
export default CommonSlice.reducer;
