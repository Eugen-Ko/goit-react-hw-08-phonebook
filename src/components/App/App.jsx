import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { lazyLoadPage } from 'services/lazyLoadPage';
import { authOperations, authSelectors } from 'redux/auth';
import { PrivateRoute } from 'services/PrivateRoute';
import PublicRoute from 'services/PublicRoute';
import { BallTriangle } from 'react-loader-spinner';

const HomePage = lazyLoadPage('HomePage');
const RegisterPage = lazyLoadPage('RegisterPage');
const LoginPage = lazyLoadPage('LoginPage');
const ContactsPage = lazyLoadPage('ContactsPage');

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      {isFetchingCurrentUser ? (
        <BallTriangle color="#00BFFF" height={80} width={80} />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              element={<PublicRoute component={<HomePage />} />}
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute redirectTo="/" component={<ContactsPage />} />
              }
            />
            <Route
              path="register"
              element={<PublicRoute component={<RegisterPage />} restricted />}
            />
            <Route
              path="login"
              element={
                <PublicRoute
                  component={<LoginPage />}
                  redirectTo="/contacts"
                  restricted
                />
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      )}
    </>
  );
};
