import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { useState, useTransition } from "react";
import { BiLoader } from "react-icons/bi";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import FormSuccess from "../form-success";
import { SignUpSchema } from "@/schema";
import AuthCardWrapper from "./auth-card-wrapper";
import { useUserData } from "@/store";
import { sleep } from "@/lib/utils";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";
import bcrypt from "bcryptjs";
import FormError from "../form-error";

export default function SignUpForm() {
  const { onRegister, user } = useUserData();
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");
  const { control, reset, handleSubmit } = useForm<
    z.infer<typeof SignUpSchema>
  >({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });
  function onSubmit({ name, email, password }: z.infer<typeof SignUpSchema>) {
    setSuccess("");
    setError("");
    startTransition(async () => {
      await sleep(2000);
      if (user.name === name || user.email === email) {
        setError("Account is exists!");
        toast.error("Account is exists!");
        return;
      }
      if (user.name || user.email) {
        setError("You already have an account.");
        toast.error("Registration is failed.");
        return;
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      onRegister({ user_id: uuidv4(), email, name, password: hashedPassword });
      setSuccess("Account is created, please Sign In.");
      reset();
    });
  }
  return (
    <AuthCardWrapper
      headerLabel="Create an Account"
      footerLabel="Already have an account?"
      href="/login"
    >
      <form
        id="sign-up-form"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <FieldGroup>
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-1.5">
                <FieldLabel
                  htmlFor="name"
                  className="font-bold dark:text-white text-black"
                >
                  Name
                </FieldLabel>
                <Input
                  {...field}
                  type="text"
                  id="name"
                  aria-invalid={fieldState.invalid}
                  placeholder="Type Name.."
                  autoComplete="off"
                  disabled={isPending}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-1.5">
                <FieldLabel
                  htmlFor="email"
                  className="font-bold dark:text-white text-black"
                >
                  Email
                </FieldLabel>
                <Input
                  {...field}
                  type="text"
                  id="email"
                  aria-invalid={fieldState.invalid}
                  placeholder="Type Email.."
                  autoComplete="off"
                  disabled={isPending}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-1.5">
                <FieldLabel
                  htmlFor="password"
                  className="font-bold dark:text-white text-black"
                >
                  Password
                </FieldLabel>
                <Input
                  {...field}
                  type="password"
                  id="password"
                  aria-invalid={fieldState.invalid}
                  placeholder="Type Password.."
                  autoComplete="off"
                  disabled={isPending}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="passwordConfirm"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-1.5">
                <FieldLabel
                  htmlFor="passwordConfirm"
                  className="font-bold dark:text-white text-black"
                >
                  Password Confirm
                </FieldLabel>
                <Input
                  {...field}
                  type="password"
                  id="passwordConfirm"
                  aria-invalid={fieldState.invalid}
                  placeholder="Type Password Confirmation.."
                  autoComplete="off"
                  disabled={isPending}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
        <FormSuccess message={success} />
        <FormError message={error} />
        <Button
          type="submit"
          form="sign-up-form"
          className="w-full relative cursor-pointer text-base lg:text-lg font-bold lg:py-5"
          disabled={isPending}
        >
          {isPending ? (
            <BiLoader className="size-6 lg:size-7 animate-spin absolute" />
          ) : (
            "Sign Up"
          )}
        </Button>
      </form>
    </AuthCardWrapper>
  );
}
