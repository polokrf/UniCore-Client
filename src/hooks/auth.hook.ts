import { getMe, logout, userLogin, userRegister } from "@/api/auth.api";
import { IUserResponse } from "@/type/user.type";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useLogin =()=>{
 return  useMutation({
    mutationFn: userLogin,
  });
} 


export const useRegister = ()=>{
  return useMutation({
    mutationFn:userRegister
  })
}
export const useLogout = ()=>{
  return useMutation({
    mutationFn:logout
  })
}

export const useGetMe =()=>{
  return useQuery<IUserResponse>({
    queryKey:['user'],
    queryFn:getMe,
    retry:false
  })
}