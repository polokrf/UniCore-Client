import { approvedStudent, approvedTeacher, getEnrollments, getResults, getStudents, getTeachers, getUsers } from '@/api/admin.access.api';
import { TManageUser, TUserQuery } from '@/type/admin.access.type';

import { useMutation, useQuery, useSuspenseQuery } from '@tanstack/react-query';

export const useGetUsers = (params:TUserQuery) => {
  return useSuspenseQuery<TManageUser>({
    queryKey: ['getUsers',params],
    queryFn:() => getUsers(params),
  });
};

export const useGetTeacher = () => {
  return useSuspenseQuery({
    queryKey: ['getTeacher'],
    queryFn: getTeachers,
  });
};

export const useGetStudent = () => {
  return useSuspenseQuery({
    queryKey: ['getTeacher'],
    queryFn: getStudents,
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


export const useApprovedTeacher =()=>{
  return useMutation({
    mutationFn:approvedTeacher
  })
}

export const useApprovedStudent =()=>{
  return useMutation({
    mutationFn:approvedStudent
  })
}





