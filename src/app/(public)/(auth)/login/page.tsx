import LoginForm from '@/components/Form/LoginForm';
import { Card } from '@/components/ui/card';
import React from 'react';

const LoginPage = () => {
  return (
    <div className=    " flex flex-col justify-center items-center p-4 min-h-screen">
      <Card className=' p-2'>
        <div className=' text-center'>
          <h1 className=' text-xl font-bold'>Welcome Back!</h1>
          <p>Plz login now , you give your email and password</p>
        </div>

        <LoginForm />
      </Card>
    </div>
  );
};

export default LoginPage;