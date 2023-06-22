import UiButton from "@/components/ui/button";
import AuthLayout from "@/layouts/auth/AuthLayout";

export default function Home() {
  return (
    <AuthLayout>
      <div className="">
        <h4 className="lg:text-lg text-base text-center my-3">
          Login with your account and continue
        </h4>
        <div className="space-x-8 text-center">
          <UiButton label="Login" href="/login" />
          <UiButton label="Signup" />
        </div>
      </div>
    </AuthLayout>
  );
}
