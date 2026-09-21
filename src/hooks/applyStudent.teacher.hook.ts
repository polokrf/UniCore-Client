import { applyStudent, applyTeacher } from "@/api/apply.student and teacher"
import { useMutation } from "@tanstack/react-query"

export const useStudentApply = ()=>{
  return useMutation({
    mutationFn:applyStudent
  })
}
export const useTeacherApply = ()=>{
  return useMutation({
    mutationFn:applyTeacher
  })
}