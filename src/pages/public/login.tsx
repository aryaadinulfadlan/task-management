import SignInForm from "@/components/auth/sign-in-form";

export default function LoginPage() {
  return (
    <div className=" min-h-[calc(100vh-2.5rem)] md:min-h-[calc(100vh-3.5rem)] grid items-center">
      <SignInForm />
    </div>
  );
}
