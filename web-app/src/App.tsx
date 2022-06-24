import { FC, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "common/hoc";
import { useLoading } from "common/hooks/useLoader";
import { AppLayout, AuthLayout } from "common/layout";
import { lightTheme, darkTheme } from "common/theme/theme";
import { useTheme } from "common/hooks/useTheme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useAppDispatch } from "redux/store";
import { getCurrentUser } from "entities/auth/redux/authOperations";
import { Loader } from "common/components";
import { ROUTES } from "routes";
import {
  HomePage,
  LoginPage,
  RegistrationPage,
  RecoveryPage,
  BlogPage,
  NotFoundPage,
} from "routes";

const App: FC = () => {
  const { isLoading } = useLoading();
  const { isThemeDark } = useTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <ThemeProvider theme={isThemeDark ? darkTheme : lightTheme}>
        <CssBaseline />

        <Suspense fallback={<Loader isLoading />}>
          <Routes>
            <Route path={ROUTES.HOME} element={<AppLayout />}>
              <Route index element={<PrivateRoute component={HomePage} />} />
              <Route
                path={ROUTES.BLOG}
                element={<PrivateRoute component={BlogPage} />}
              />
            </Route>

            <Route path={ROUTES.AUTH} element={<AuthLayout />}>
              <Route
                index
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
      </ThemeProvider>
    </>
  );
};

export default App;
