import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { UserResponse } from "../interfaces/user-response.interface";
import {
  createUserFormSchema,
  editUserFormSchema,
  type UserFormValues,
} from "../schemas/user-form.schema";

interface Props {
  user?: UserResponse;
  isPending: boolean;
  onSubmit: (values: UserFormValues) => void;
  onCancel: () => void;
}

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}

const Field = ({ id, label, error, children }: FieldProps) => (
  <div className="flex flex-col gap-2">
    <Label htmlFor={id}>{label}</Label>
    {children}
    {error && <p className="text-sm text-destructive">{error}</p>}
  </div>
);

export const UserForm = ({ user, isPending, onSubmit, onCancel }: Props) => {
  const isEdit = user !== undefined;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormValues>({
    resolver: zodResolver(isEdit ? editUserFormSchema : createUserFormSchema),
    defaultValues: {
      firstName: user?.person.firstName ?? "",
      middleName: user?.person.middleName ?? "",
      lastName: user?.person.lastName ?? "",
      username: user?.username ?? "",
      email: user?.email ?? "",
      password: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
      noValidate
    >
      <Field id="firstName" label="First name" error={errors.firstName?.message}>
        <Input
          id="firstName"
          aria-invalid={!!errors.firstName}
          {...register("firstName")}
        />
      </Field>

      <Field
        id="middleName"
        label="Middle name (optional)"
        error={errors.middleName?.message}
      >
        <Input
          id="middleName"
          aria-invalid={!!errors.middleName}
          {...register("middleName")}
        />
      </Field>

      <Field id="lastName" label="Last name" error={errors.lastName?.message}>
        <Input
          id="lastName"
          aria-invalid={!!errors.lastName}
          {...register("lastName")}
        />
      </Field>

      <Field id="username" label="Username" error={errors.username?.message}>
        <Input
          id="username"
          autoComplete="off"
          aria-invalid={!!errors.username}
          {...register("username")}
        />
      </Field>

      <Field id="email" label="E-mail" error={errors.email?.message}>
        <Input
          id="email"
          type="email"
          autoComplete="off"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
      </Field>

      {!isEdit && (
        <Field id="password" label="Password" error={errors.password?.message}>
          <Input
            id="password"
            type="password"
            autoComplete="new-password"
            aria-invalid={!!errors.password}
            {...register("password")}
          />
        </Field>
      )}

      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isPending}>
          {isPending ? "Saving..." : "Save"}
        </Button>
      </div>
    </form>
  );
};
