import { getDepartment, singleGetDepartment } from "@/api/department.api"
import { TDepartmentResponse, TSingleDepartment } from "@/type/depart.type"
import { useSuspenseQuery } from "@tanstack/react-query"


export const useGetDepartment = ()=>{
  return useSuspenseQuery<TDepartmentResponse>({
    queryKey:['department'],
    queryFn:getDepartment
  })
}

// single get 

export const useSingleGetDepartment = (id:string) => {
  return useSuspenseQuery<TSingleDepartment>({
    queryKey: ['department', id],
    queryFn: () => singleGetDepartment(id),
  });
};
