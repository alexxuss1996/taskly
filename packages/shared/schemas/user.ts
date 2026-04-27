import { z } from "zod";

export const userSchema = z.object({
  id: z.uuidv6(),
  email: z.email(),
  password: z.string().min(6),
  name: z.string().min(3),
});
