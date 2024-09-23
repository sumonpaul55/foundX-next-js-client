import { z } from "zod";

const loginValidationSchema = z.object({
  email: z.string().trim().email("Please enter a valid email"),
  password: z.string({ required_error: "enter Passowrd" }).trim().min(6, "password need to be at least 6"),
});

export default loginValidationSchema;
