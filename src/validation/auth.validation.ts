import z from 'zod'
export const loginPayload = z.object({
  email: z.email('plz provide valid email'),
  password: z.string().min(6, 'plz provide 6 digit pin number'),
});
