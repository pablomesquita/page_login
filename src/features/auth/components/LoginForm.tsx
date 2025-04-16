/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../schemas/auth';
import { authService } from '@/shared/services/api';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { Input } from './Input';

export function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError
  } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const response = await authService.login(data);
      
      if (response.accessToken) {
        localStorage.setItem('authToken', response.accessToken);
        toast.success('Login bem-sucedido!');
        router.push('/welcome');
      }
    } catch (error: any) {
      console.error('Erro completo:', error);
      
      if (error.response) {
        const message = error.response.data?.message || 'Credenciais inválidas';
        
        if (error.response.status === 401) {
          setError('email', { type: 'manual', message });
          setError('password', { type: 'manual', message });
        }
        toast.error(message);
      } else {
        toast.error('Erro de conexão com o servidor');
      }
    }
  };
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="w-full p-2 border rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <Input
         label="Senha"
          id="password"
          type="password"
          {...register('password')}

          className="w-full p-2 border rounded"
          isPassword={true}
          showForgotPassword={true}
          showRememberMe={true}
          rememberMe={rememberMe}
          onRememberMeChange={setRememberMe}
          placeholder="Digite sua senha"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors"
      >
        {isSubmitting ? 'Entrando...' : 'Entrar'}
      </button>
    </form>
  );
}