import * as zod from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { BiLoader } from "react-icons/bi";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { SignInSchema } from "@/schema";
import { useNavigate } from "react-router";
import { useUserData, useUserSession } from "@/store";
import { sleep } from "@/lib/utils";
import { v4 as uuidv4 } from "uuid";
import AuthCardWrapper from "./auth-card-wrapper";
import bcrypt from "bcryptjs";
import FormError from "../form-error";

export default function SignInForm() {
  const { login } = useUserSession();
  const { user } = useUserData();
  const navigate = useNavigate();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const { control, reset, handleSubmit } = useForm<
    zod.infer<typeof SignInSchema>
  >({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit({ email, password }: zod.infer<typeof SignInSchema>) {
    setError("");
    startTransition(async () => {
      await sleep(2000);
      const passwordMatched = await bcrypt.compare(password, user.password);
      if (user.email !== email || !passwordMatched) {
        toast.error("Invalid Account!");
        setError("Invalid Account!");
        return;
      }
      login(user.user_id, user.name, user.email, uuidv4());
      reset();
      toast.success("Successfullt Logged-In");
      navigate("/home");
    });
  }
  return (
    <AuthCardWrapper
      headerLabel="Welcome Back!"
      footerLabel="Don't have an account?"
      href="/register"
    >
      <form
        id="sign-in-form"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <FieldGroup>
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
        </FieldGroup>
        <FormError message={error} />
        <Button
          type="submit"
          form="sign-in-form"
          className="w-full relative cursor-pointer text-base lg:text-lg font-bold lg:py-5"
          disabled={isPending}
        >
          {isPending ? (
            <BiLoader className="size-6 lg:size-7 animate-spin absolute" />
          ) : (
            "Sign In"
          )}
        </Button>
      </form>
    </AuthCardWrapper>
  );
}
