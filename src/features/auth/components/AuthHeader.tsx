import Image from "next/image";
import Link from "next/link";

export const AuthHeader = () => {
  return (
    <div className="flex flex-col text-background">
      <Image 
        src="/ginte-Icon.svg" 
        alt="Icon ginte" 
        width={100} 
        height={100} 
        priority 
        className="mb-8"
      />
      <h1 className="text-[36px] font-semibold  text-[#18181B]">Entre na sua conta</h1>
      <h2 className="text-[24px] font-normal text-gray-500 ">
        Acesse sua conta e gerencie sua empresa
      </h2>
      <p className="text-gray-500 text-[16px] text-[#3B82F6] gap-[5px] flex">
        Não possui uma conta?
        <Link 
          href="" 
          className="text-blue-500 hover:text-blue-600 cursor-pointer transition-colors"
        >
          Cadastrar
        </Link>
      </p>
    </div>
  );
};