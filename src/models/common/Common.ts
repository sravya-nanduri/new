export interface ICommonResponse {
  data: any | null;
  message: string;
  status: string;
}

export interface ICommon {
  isLoading: boolean;
  isSuccess: boolean;
  message: string | null;
  isError: boolean;
  displayMsg: boolean;
  calledReducerType: string | null;
}
