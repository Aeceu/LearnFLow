import { z } from "zod";

export const userSignUpSchema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  email: z.string().email().min(1, "Required"),
  password: z.string().min(6, "Password should atleast 6 characters."),
});
