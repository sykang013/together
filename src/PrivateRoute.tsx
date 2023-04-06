import { Navigate } from 'react-router-dom';
import LoadingSpinner from './components/loading/LoadingSpinner';
import { useAuthState } from './firebase/auth';
import { FC, ReactNode } from 'react';

const PrivateRoute: FC<{ children: ReactNode }> = ({ children }) => {
  const { user, isLoading } = useAuthState();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (user) {
    if (location.pathname === '/') {
      return <Navigate to="/main" />;
    } else {
      return <>{children}</>;
    }
  } else {
    if (location.pathname === '/') {
      return <>{children}</>;
    } else {
      return <Navigate to="/login" />;
    }
  }
};

export default PrivateRoute;
