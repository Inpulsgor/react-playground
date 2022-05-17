import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from 'common/hooks/useAuth';
import { ROUTES } from 'types/enum';

interface RouteProps {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: RouteProps) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location.pathname }} />;
  }

  return children;
};
