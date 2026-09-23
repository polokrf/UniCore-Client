import apiFetch from "@/lib/apiFetch"
import { TManageUser, TUserQuery } from "@/type/admin.access.type";

export const getUsers = (params:TUserQuery) => {
  return apiFetch<TManageUser>(`/api/admin/users`,{
    params
  });
};

export const getTeachers =()=>{
 return apiFetch(`/api/admin/teachers`);
}

export const getStudents =()=>{
 return apiFetch(`/api/admin/students`);
}

export const getEnrollments =()=>{
 return apiFetch(`/api/admin/enrollments`);
}
export const getResults =()=>{
 return apiFetch(`/api/admin/results`);
}


export const approvedTeacher =(id:string)=>{
  return apiFetch(`/api/admin/teachers/${id}`,{method:'PATCH'});
}
export const approvedStudent =(id:string)=>{
  return apiFetch(`/api/admin/students/${id}`,{method:'PATCH'});
}