import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from './auth';
import { urls } from '@/types/constants';

const WithOutAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const AuthComponent: React.FC<P> = (props) => {
    const router = useRouter();

    useEffect(() => {
      // Check authentication
      if (isAuthenticated()) {
        router.push(urls.home);
      }
    }, [WrappedComponent]);

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default WithOutAuth;
