import { getMe, logout, userLogin, userRegister } from "@/api/auth.api";
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
  return useQuery({
    queryKey:['user'],
    queryFn:getMe,
    retry:false
  })
}