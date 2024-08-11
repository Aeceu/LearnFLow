import { z } from "zod";
import { userSignUpSchema } from "../schema/userSchema";

export type userSignUpType = z.infer<typeof userSignUpSchema>;

export type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
  createdAt: Date;
};
