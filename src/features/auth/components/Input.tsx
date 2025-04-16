import React from "react";
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
      </div>
    );
  }
);

Input.displayName = "Input";