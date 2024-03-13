import { setIsLoading, setIsSuccess, setIsError, setMessage, setDisplayMsg, setCalledReducerType, resetCommonSlice } from '../common/CommonSlice';

export const CustomAction = async (apiMethod: any, dispatch: any, reducerType: string | null = null, displayMsg: boolean = false, customMsg: string | null = null) => {
  dispatch(resetCommonSlice());
  dispatch(setIsLoading(true))
  try {
    const { data } = await apiMethod;
    if (data.status === 'success') {
      dispatch(setIsSuccess(true));
    } else {
      dispatch(setIsError(true));
    }
    if (reducerType) {
      dispatch(setCalledReducerType(reducerType));
    }
    if (customMsg) {
      dispatch(setMessage(customMsg));
    } else {
      dispatch(setMessage(data.message));
    }
    if (displayMsg) {
      setDisplayMsg(true);
    }
    dispatch(setIsLoading(false));
    return data;
  } catch (error) {
    dispatch(setIsLoading(false));
    dispatch(setIsError(true));
    throw error;
  }
}
  