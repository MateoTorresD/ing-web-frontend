import { z } from "zod";

const USERNAME_REGEX = /^[a-zA-Z0-9._-]{3,30}$/;

const sharedShape = {
  firstName: z.string().trim().min(1, "First name is required").max(100),
  middleName: z.string().trim().max(100).optional(),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  username: z
    .string()
    .regex(
      USERNAME_REGEX,
      "3-30 characters: letters, numbers, dot, underscore or hyphen",
    ),
  email: z
    .string()
    .trim()
    .pipe(z.email("Invalid e-mail"))
    .pipe(z.string().max(255)),
};

export const createUserFormSchema = z.object({
  ...sharedShape,
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password must be at most 128 characters"),
});

// Password is not editable (the backend omits it in UpdateUserDto); the field
// stays in the type so both schemas share the same form values.
export const editUserFormSchema = z.object({
  ...sharedShape,
  password: z.string(),
});

export type UserFormValues = z.infer<typeof createUserFormSchema>;
