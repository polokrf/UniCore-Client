import apiFetch from "@/lib/apiFetch"

export const userLogin=(payload:{email:string,password:string})=>{
 return apiFetch('/api/auth/login',{method:'POST',body: payload})
}