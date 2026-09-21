import apiFetch from "@/lib/apiFetch"
import {  TDepartmentResponse, TSingleDepartment } from "@/type/depart.type";


export const getDepartment =()=>{
  return apiFetch<TDepartmentResponse>(`/api/department`);
}

//  single get department 

export const singleGetDepartment = (id:string)=>{
   return apiFetch<TSingleDepartment>(`/api/department/${id}`);
}