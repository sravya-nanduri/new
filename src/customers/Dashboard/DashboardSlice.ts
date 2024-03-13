import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDashboardSlice } from '../../models/customers/dashboard/Dashboard';
import { GetTestData } from './DashboardAction';

const initialState: IDashboardSlice = {
  testData: [],
};

const DashboardSlice = createSlice({
    name: 'dashboard',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
      builder.addCase(GetTestData.fulfilled, (state, action) => {
        state.testData = action.payload;
      });
    },
});

export default DashboardSlice.reducer;
