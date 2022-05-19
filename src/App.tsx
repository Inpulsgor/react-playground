import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "common/hoc";
import { useLoading } from "common/hooks/useLoader";
import { AppLayout, AuthLayout } from "common/layout";
import { Loader } from "common/components";
import { ROUTES } from "types/enum";
import {
  HomePage,
  LoginPage,
  RegistrationPage,
  RecoveryPage,
  NotFoundPage,
} from "routes";

const App: FC = () => {
  const { isLoading } = useLoading();

  return (
    <>
      <Suspense fallback={<Loader isLoading />}>
        <Routes>
          <Route path={ROUTES.HOME} element={<AppLayout />}>
            <Route index element={<PrivateRoute component={HomePage} />} />
          </Route>

          <Route path={ROUTES.AUTH} element={<AuthLayout />}>
            <Route
              path={ROUTES.AUTH}
              element={
                <PublicRoute
                  restricted
                  redirect={ROUTES.HOME}
                  component={LoginPage}
                />
              }
            />
            <Route
              path={ROUTES.REGISTRATION}
              element={
                <PublicRoute
                  restricted
                  redirect={ROUTES.HOME}
                  component={RegistrationPage}
                />
              }
            />
            <Route
              path={ROUTES.RECOVERY}
              element={
                <PublicRoute
                  restricted
                  redirect={ROUTES.HOME}
                  component={RecoveryPage}
                />
              }
            />
          </Route>
          <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      {isLoading && <Loader isLoading />}
    </>
  );
};

export default App;
