import { node } from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuthState } from './firebase/auth';

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuthState();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: node,
};

export default PrivateRoute;
