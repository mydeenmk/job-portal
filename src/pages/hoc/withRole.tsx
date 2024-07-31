// hoc/withRole.tsx
import React from 'react';
import { useRouter } from 'next/router';

const withRole = (Component: React.ComponentType, allowedRoles: string[]) => {
  return (props: any) => {
    const router = useRouter();
    const userRole = 'hr'; // Fetch the user role from your authentication context or API

    if (!allowedRoles.includes(userRole)) {
      router.push('/');
      return null;
    }

    return <Component {...props} />;
  };
};

export default withRole;
