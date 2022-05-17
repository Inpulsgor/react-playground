import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout, AuthLayout } from 'common/layout';
import { Loader } from 'common/components';
import { ROUTES } from 'types/enum';
import { PrivateRoute } from 'common/hoc/PrivateRoute';
import {
  HomePage,
  LoginPage,
  RegistrationPage,
  RecoveryPage,
  NotFoundPage,
} from 'routes';

const App: FC = () => {
  return (
    <Suspense fallback={<Loader isLoading />}>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route
            index
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path={ROUTES.AUTH} element={<AuthLayout />}>
          <Route path={ROUTES.AUTH} element={<LoginPage />} />
          <Route path={ROUTES.REGISTRATION} element={<RegistrationPage />} />
          <Route path={ROUTES.RECOVERY} element={<RecoveryPage />} />
        </Route>
        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
