'use client'

import { useForm } from '@tanstack/react-form';
import React, { useState } from 'react';
import { Field, FieldError, FieldGroup, FieldLabel } from '../ui/field';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Eye, EyeClosed } from 'lucide-react';
import { registerPayload } from '@/validation/auth.validation';
import { useRegister } from '@/hooks/auth.hook';

import { useRouter } from 'next/navigation';
import { toast } from '../ui/toast';
import { Spinner } from '../ui/spinner';
import { useQueryClient } from '@tanstack/react-query';

const RegisterForm = () => {
  const [show,setShow]=useState(false)
  const [conShow,setConShow]=useState(false)
  const {mutate:register , isPending:registerPending}=useRegister()
  const queryClient =useQueryClient()
  const route=useRouter()
  const form = useForm({
    defaultValues: {
      firstName: '',
      email: '',
      password: '',
      confirmPassword:""
    },
    validators: {
      onSubmit: registerPayload,
    },
    onSubmit: ({ value }) => {
    

      const registerData ={
        firstName:value.firstName,
        email:value.email,
        password:value.password
      }

       register(registerData,{
        onSuccess:(res)=>{
           toast.add({
             type: 'success',
             description: 'login successfully',
           });
           queryClient.invalidateQueries({
             queryKey: ['user'],
           });
           route.push('/');
          
          // console.log(res)
        },
        onError:(error)=> {
          console.log(error.message)
          toast.add({
                      type: 'warning',
                      description: 'something was warning',
                    });
        },
       })
    },
  });

  const handleShow=()=>{
  
    setShow((prev)=> !prev)
  }

  const handleConShow=()=>{
    setConShow((prev)=> !prev)
  }
  return (
    <form onSubmit={(e)=>{
      e.preventDefault()
      form.handleSubmit()
    }}>
      <FieldGroup>
        {/* name */}
        <form.Field
            name="firstName"
            children={field => {
              const invalid=field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <div>
                  <Field data-invalid={invalid}>
                    <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={e => field.handleChange(e.target.value)}
                      autoComplete="off"
                      placeholder="plz inter your name"
                      type="text"
                    />
                    {
                      invalid && <FieldError errors={field.state.meta.errors}/>
                    }
                  </Field>
                </div>
              );
            }}
          />
        {/* email */}
        <form.Field
            name="email"
            children={field => {
               const invalid =
                 field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <div>
                  <Field>
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={e => field.handleChange(e.target.value)}
                      autoComplete="off"
                      placeholder="plz inter your email"
                      type="email"
                    />
                    {invalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>
                </div>
              );
            }}
          />
        {/*password*/}
        <form.Field
            name="password"
            children={field => {
              const invalid =field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <div className=" relative">
                  <Field>
                    <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={e => field.handleChange(e.target.value)}
                      autoComplete="off"
                      placeholder="plz inter your password"
                      type={show ? 'text' : 'password'}
                    />

                    {invalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>

                  <button
                    className=" absolute right-2 top-8"
                    onClick={handleShow}
                    type="button"
                  >
                    {' '}
                    {show ? <EyeClosed size={12} /> : <Eye size={12} />}{' '}
                  </button>
                </div>
              );
            }}
          />
        {/*confirmPassword*/}
        <form.Field
            name="confirmPassword"
            children={field => {
              const invalid =field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <div className=" relative">
                  <Field>
                    <FieldLabel htmlFor={field.name}>
                      Confirm Password
                    </FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={e => field.handleChange(e.target.value)}
                      autoComplete="off"
                      placeholder="plz inter your confirm password"
                      type={conShow ? 'text' : 'password'}
                    />

                    {invalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>

                  <button
                    className=" absolute right-2 top-8"
                    onClick={handleConShow}
                    type="button"
                  >
                    {' '}
                    {conShow ? <EyeClosed size={12} /> : <Eye size={12} />}{' '}
                  </button>
                </div>
              );
            }}
          />
       
      </FieldGroup>

      <div className=' mt-2'>
        <Button disabled={registerPending} type='submit' className='w-full'>{registerPending ? <Spinner/> :' Register Now!'}</Button>
      </div>
    </form>
  );
};

export default RegisterForm;