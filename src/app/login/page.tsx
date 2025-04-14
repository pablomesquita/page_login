import { AuthHeader } from "@/features/auth/components/AuthHeader";
import { LoginForm } from "@/features/auth/components/LoginForm";
import { authStyles } from "@/features/auth/styles/auth.styles";
import { Divider } from "@/shared/components/ui/Divider";

export default function LoginPage() {
  return (
    <div className={authStyles.container}>
      <main className={authStyles.main}>
        <AuthHeader />
        <Divider />
        <LoginForm />
      </main>
      <div className="bg-GreenPanel w-[780px] h-[984px] rounded-[24px] hide-on-mobile"></div>
    </div>
  );
}