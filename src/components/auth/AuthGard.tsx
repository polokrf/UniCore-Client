'use client'

import { useGetMe } from '@/hooks/auth.hook';
import { useRouter } from 'next/navigation';
import React, { ReactNode, useEffect } from 'react';
import AuthLoading from './AuthLoading';


const AuthGard = ({children}:{children:ReactNode}) => {
  const {data,isPending,isError}= useGetMe()
  const router =useRouter()
  
  const user = data?.data
  // console.log(data)
  
  useEffect(()=>{
    if(isPending){
      return
    }

    if( isError ||  !user){
      router.replace('/login')
    }

    if(user.role === 'USER'){
      router.replace('/');
    }


  },[isError,isPending,user,router])
   

  if(isPending){
    return <AuthLoading/>
  }

  if(isError || !user){
    return  <AuthLoading label="Redirecting..." />;
  }


  return <>{children}</>
  
};

export default AuthGard;