import AuthRoleGard from '@/components/auth/AuthRoleGard';
import React, { ReactNode } from 'react';

const StudentDashboard = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <AuthRoleGard roles={['STUDENT']}> {children}</AuthRoleGard>
    </div>
  );
};

export default StudentDashboard;
