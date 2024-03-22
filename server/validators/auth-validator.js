const { z } = require("zod");
const loginSchema=z.object({
  email: z
  .string({ required_error: "email is required" })
  .trim()
  .email({ message: "email is invalid" })
  .min(15, { message: "email must be of 15 characters" })
  .max(30, { message: "email must be less than 31 characters" }),
  password: z
  .string({ required_error: "password is required" })
  .trim()
  .min(3, { message: "password must be of 3 characters" })
  .max(10, { message: "password must be less than 11 characters" }),
})
const signupSchema = loginSchema.extend({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "name must be of 3 characters" })
    .max(10, { message: "name must be less than 11 characters" }),
 
  phone: z
    .string({ required_error: "phone is required" })
    .trim()
    .min(11, { message: "phone  must be of 11 characters" })
    .max(11, { message: "phone must be less than 12 characters" }),
 
});
module.exports={signupSchema,loginSchema};
