export interface IDashboard {
  policyId: string;
}

export interface IUser {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IDashboardSlice {
  testData: IUser[];
}
