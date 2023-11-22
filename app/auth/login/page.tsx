'use client'
import { ChangeEvent, useState } from 'react';
import { Button } from '@nextui-org/button';
import './styles.css';
import { Input } from '@nextui-org/input';
import { useRouter } from 'next/navigation';
import { httpUrl, urls } from '@/types/constants';
import axios, { AxiosError, isAxiosError } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { User } from '@/interfaces/user';
import { AxiosErrorResponse } from '@/interfaces/axiosError';
import WithOutAuth from '@/app/utils/withOutAuth';

interface LoginForm {
  email: string;
  password: string;
}
const LoginPage = () => {
  const router = useRouter();
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setLoginForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const clearForm = () =>{
    setLoginForm({email:'',password:''});
  }

  const handleLogin = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const {status, data} = await axios.post<User>(`${httpUrl}auth/login`, loginForm);
      if(status == StatusCodes.OK){
        localStorage.setItem("token",data.token);
        router.push(urls.home);
      } 
    } catch (error) {
      if(isAxiosError(error)){
        const {response}: AxiosError<AxiosErrorResponse> = error;
        if(response?.status == StatusCodes.UNAUTHORIZED){
          clearForm();
          setErrorMessage(response.data.message);
        }
      }else console.error(error)
    }
  };
 
  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <label>
          <Input
            isRequired
            type="text"
            name="email"
            label='Email'
            value={loginForm.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <Input
            isRequired
            type="password"
            name="password"
            label='Password'
            value={loginForm.password}
            onChange={handleInputChange}
          />
        </label>
        <Button type='submit' color='primary'>
          Login
        </Button>
        
      </form>
      
      {errorMessage && (
      <h1 style={{ color: 'red' }}>{errorMessage}</h1>
    )}
    </div>
  );
};

export default WithOutAuth(LoginPage);