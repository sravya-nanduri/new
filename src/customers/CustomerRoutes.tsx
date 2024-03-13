import { useCallback, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Dashboard from './Dashboard/Dashboard';
import Header from '../common/Header/Header';
import { useAppSelector } from '../store/hooks';
import { RootState } from '../store/store';
import { getCookie } from '../utils/Utility';

const CustomerRoutes = () => {
  const navigate = useNavigate();
  const { isLogin } = useAppSelector((store: RootState) => store.login);
  const roleName = getCookie('roleName');
  const authenticated = getCookie('authenticated');

  const checkAuthentication = useCallback(() => {
    if (roleName && roleName !== 'customer') {
      navigate('/');
    }
  }, [navigate, roleName]);

  useEffect(() => {
    checkAuthentication();
  }, [checkAuthentication]);

  useEffect(() => {
    if (!isLogin || !authenticated) {
      navigate('/');
    }
  }, [isLogin, authenticated, navigate]);

  return (
    <Container maxWidth={false}>
      <Header />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </Container>
  );
}

export default CustomerRoutes;
