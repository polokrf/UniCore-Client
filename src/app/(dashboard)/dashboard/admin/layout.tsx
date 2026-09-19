
import AuthRoleGard from '@/components/auth/AuthRoleGard';
import React, { ReactNode } from 'react';

const AdminDashboard = ({children}:{children:ReactNode}) => {
  return (
    <div>
      <AuthRoleGard roles={['SUPER_ADMIN','ADMIN']}>    {children}</AuthRoleGard>
    </div>
  );
};

export default AdminDashboard;