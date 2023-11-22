import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from './auth';
import { urls } from '@/types/constants';

const WithAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const AuthComponent: React.FC<P> = (props) => {
    const router = useRouter();

    useEffect(() => {
      // Check authentication
      if (!isAuthenticated()) {
        // Redirect to login if not authenticated
        router.push(urls.login);
      }
    }, [WrappedComponent]);

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default WithAuth;
