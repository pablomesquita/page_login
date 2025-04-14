"use client";
import { Input } from "@/shared/components/ui/Input";
import { useState } from "react";

export const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [password, setPassword] = useState('');
  
  return (
    <form className="w-full space-y-6">
      <div className="space-y-4">
        <Input label="E-mail" type="email" placeholder="Digite seu melhor e-mail" name="email" />

        <Input
          label="Senha"
          type="password"
          isPassword={true}
          showForgotPassword={true}
          showRememberMe={true}
          rememberMe={rememberMe}
          onRememberMeChange={setRememberMe}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite sua senha"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors"
      >
        Entrar
      </button>
    </form>
  );
};