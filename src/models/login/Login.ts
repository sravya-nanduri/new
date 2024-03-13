export interface ILogin {
  indexName: string;
  contactNumber: string;
}

export interface ILoginRequestParams {
  data: ILogin
}

export interface IUserDetails {
  name: string;
  contactNumber: string;
}

export interface ILoginSlice {
  isLogin: boolean;
  userDetails: IUserDetails | null;
}