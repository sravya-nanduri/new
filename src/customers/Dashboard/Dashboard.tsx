import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';
import { GetTestData } from './DashboardAction';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { testData } = useAppSelector((store: RootState) => store.dashboard);

  console.log('testData', testData);
  useEffect(() => {
    dispatch(GetTestData());
  }, []);

  return (
    <div>Dashboard</div>
  );
}

export default Dashboard;
