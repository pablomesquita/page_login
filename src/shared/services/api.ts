import axios from 'axios';

const api = axios.create({
  baseURL: 'http://162.243.29.98',
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export const authService = {
  login: (credentials: { email: string; password: string }) => 
    api.post('/auth/sign-in', credentials).then(res => res.data),
  
  validateSession: () => api.get('/auth/validate-session').then(res => res.data),
  
  signUp: (data: {
    user: { name: string; email: string; password: string };
    company: { corporateName: string; taxId: string; email: string; phone?: string };
    address: { cep: string; state: string; city: string; neighborhood: string; street: string; number: string };
    plan: { id: string; PaymentMethodEnum: 'PIX' | 'BOLETO' | 'CARD' };
  }) => api.post('/auth/sign-up', data).then(res => res.data),
  
  logout: () => {
    localStorage.removeItem('authToken');
    return Promise.resolve();
  }
};