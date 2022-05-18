import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'common/hooks/useAuth';

interface PublicRouteProps {
  restricted: boolean;
  redirect: string;
  component: FC;
}

const PublicRoute: FC<PublicRouteProps> = ({
  restricted,
  redirect,
  component: Component,
}) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated && restricted ? (
    <Navigate to={redirect} />
  ) : (
    <Component />
  );
};

export default PublicRoute;
