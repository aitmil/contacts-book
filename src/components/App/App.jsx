import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage')
);

export default function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          />
          <Route
            path='/register'
            element={<RegisterPage />}
          />
          <Route
            path='/login'
            element={<LoginPage />}
          />
          <Route
            path='/contacts'
            element={<ContactsPage />}
          />
        </Routes>
      </Suspense>
    </Layout>
  );
}
