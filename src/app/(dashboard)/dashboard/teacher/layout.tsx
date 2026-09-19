import AuthRoleGard from '@/components/auth/AuthRoleGard';
import React, { ReactNode } from 'react';

const TeacherDashboard = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <AuthRoleGard roles={['TEACHER']}> {children}</AuthRoleGard>
    </div>
  );
};

export default TeacherDashboard;
