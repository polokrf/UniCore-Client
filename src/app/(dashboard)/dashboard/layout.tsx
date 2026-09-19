import AuthGard from '@/components/auth/AuthGard';
import React, { ReactNode } from 'react';

const DashboardLayout = ({children}:{children:ReactNode}) => {
  return (
    <div>
      <AuthGard> {children}</AuthGard>
    </div>
  );
};

export default DashboardLayout;