import { FC } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from 'common/hooks/useAuth';
import { ROUTES } from 'types/enum';

interface PrivateRouteProps {
  component: FC;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  return !isAuthenticated ? (
    <Navigate to={ROUTES.AUTH} state={{ from: location.pathname }} />
  ) : (
    <Component />
  );
};

export default PrivateRoute;
