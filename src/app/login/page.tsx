import { LoginForm } from "@/features/auth/components/LoginForm";
import { AuthHeader } from "@/features/auth/components/AuthHeader";
import { authStyles } from "@/features/auth/styles/auth.styles";
import { Divider } from "@/features/auth/components/Divider";

export default function LoginPage() {
  return (
    <div className={authStyles.container}>
      <main className={authStyles.main}>
        <AuthHeader />
        <Divider />
        <LoginForm />
      </main>
      <div className="bg-GreenPanel w-[680px] h-[900] rounded-[24px] hide-on-mobile"></div>
    </div>
  );
}
