import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = Cookies.get('token'); // Retrieve the token from cookies

      if (!token) {
        router.push('/login'); // Redirect to the login page if the token is not present
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
