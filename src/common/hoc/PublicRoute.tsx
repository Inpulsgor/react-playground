import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'common/hooks/useAuth';
import { ROUTES } from 'types/enum';

interface PublicRouteProps {
  component: FC;
}

export const PublicRoute = ({ component: Component }: PublicRouteProps) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.AUTH} state={{ from: location.pathname }} />;
  }

  return <Component />;
};
