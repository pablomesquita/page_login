import React from "react";
import Link from "next/link";
import Image from "next/image";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isPassword?: boolean;
  showForgotPassword?: boolean;
  showRememberMe?: boolean;
  rememberMe?: boolean;
  onRememberMeChange?: (checked: boolean) => void;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      isPassword = false,
      showForgotPassword = false,
      showRememberMe = false,
      rememberMe = false,
      onRememberMeChange,
      type,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const inputType = isPassword ? (showPassword ? "text" : "password") : type;

    return (
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium text-[#18181B]">{label}</label>
        </div>
        
        <div className="relative">
          <input
            ref={ref}
            type={inputType}
            className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
            {...props}
          />
          
          {isPassword && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                <Image
                  src="/eye-solid.svg"
                  alt="Ocultar senha"
                  width={20}
                  height={20}
                />
              ) : (
                <Image
                  src="/eye-slash-solid.svg"
                  alt="Mostrar senha"
                  width={20}
                  height={20}
                />
              )}
            </button>
          )}
        </div>

        {isPassword && showRememberMe && (
          <div className="flex items-center gap-2 justify-between">
            {isPassword && showForgotPassword && (
              <Link href="" className="text-xs text-[#71717A] hover:text-blue-600 transition-colors">
                Esqueceu sua senha?
              </Link>
            )}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={(e) => onRememberMeChange?.(e.target.checked)}
                className="cursor-pointer h-4 w-4 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="remember-me" className="text-sm text-[#18181B]">
                Manter conectado
              </label>
            </div>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";