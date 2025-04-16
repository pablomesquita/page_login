"use client";
import { useRouter } from "next/navigation";
import { authService } from "@/shared/services/api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function WelcomePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const validateSession = async () => {
      try {
        await authService.validateSession();
        setIsLoading(false);
      } catch (error) {
        localStorage.removeItem("authToken");
        router.push("/login");
        console.error("Erro na validação:", error);
      }
    };

    validateSession();
  }, [router]);

  const handleLogout = async () => {
    try {
      await authService.logout();
      toast.success("Logout realizado com sucesso!");
      router.push("/login");
    } catch (error) {
      console.error("Erro na validação:", error);
      localStorage.removeItem("authToken");
      router.push("/login");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-lg">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex items-center flex-col justify-center gap-[60px] ">
      <h2 className="text-[#000] text-[64px]">Dashboard</h2>
      <button onClick={handleLogout} className="text-[#F00] text-[24px]">
        logout
      </button>
    </div>
  );
}
