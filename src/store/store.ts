import { configureStore, combineReducers, ThunkAction, Action, AnyAction } from '@reduxjs/toolkit';
import DashboardSlice from '../customers/Dashboard/DashboardSlice';
import CommonSlice from '../common/CommonSlice';
import LoginSlice from '../login/LoginSlice';

const appReducer = combineReducers({
  dashboard: DashboardSlice,
  common: CommonSlice,
  login: LoginSlice,
});

const reducerProxy = (state: any, action: AnyAction) => {
  if(action.type === 'logout') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
}

export const store = configureStore({
  reducer: reducerProxy,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
