import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from 'common/components';
import { ROUTES } from 'types/enum';
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
        <Route path={ROUTES.HOME} element={<HomePage />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.REGISTRATION} element={<RegistrationPage />} />
          <Route path={ROUTES.RECOVERY} element={<RecoveryPage />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
