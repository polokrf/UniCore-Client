import {
  approvedStudent,
  approvedTeacher,
  getEnrollments,
  getResults,
  getStudents,
  getTeachers,
  getUsers,
} from '@/api/admin.access.api';
import {
  TManageUser,
  TUserQuery,
  
} from '@/type/addminAccess/admin.access.type';
import { TApprovedStudent } from '@/type/addminAccess/student.approved';
import { TApprovedTeacher } from '@/type/addminAccess/teacher.approved.type';
import { IStudentQuery, ITeacherQuery } from '@/type/query.types';


import { useMutation, useQuery, useSuspenseQuery } from '@tanstack/react-query';

export const useGetUsers = (params: TUserQuery) => {
  return useSuspenseQuery<TManageUser>({
    queryKey: ['getUsers', params],
    queryFn: () => getUsers(params),
  });
};

export const useGetTeacher = (params:ITeacherQuery) => {
  return useSuspenseQuery<TApprovedTeacher>({
    queryKey: ['getTeacher',params],
    queryFn:()=> getTeachers(params),
  });
};

export const useGetStudent = (params :IStudentQuery) => {
  return useSuspenseQuery<TApprovedStudent>({
    queryKey: ['getTeacher',params],
    queryFn:()=> getStudents(params),
  });
};

export const useGetEnrollments = () => {
  return useSuspenseQuery({
    queryKey: ['getEnrollments'],
    queryFn: getEnrollments,
  });
};
export const useGetResults = () => {
  return useSuspenseQuery({
    queryKey: ['getResults'],
    queryFn: getResults,
  });
};

export const useApprovedTeacher = () => {
  return useMutation({
    mutationFn: approvedTeacher,
  });
};

export const useApprovedStudent = () => {
  return useMutation({
    mutationFn: approvedStudent,
  });
};
