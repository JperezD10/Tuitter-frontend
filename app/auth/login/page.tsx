'use client'
import { ChangeEvent, useState } from 'react';
import { Button } from '@nextui-org/button';
import './styles.css';
import { Input } from '@nextui-org/input';

interface LoginForm {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: '',
    password: '',
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setLoginForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleLogin = (): void => {
    // Aquí puedes implementar la lógica de autenticación
    console.log('Usuario:', loginForm.email);
    console.log('Contraseña:', loginForm.password);
  };
 
  return (
    <div className="login-container">
      <form>
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
        <Button color='primary' onClick={handleLogin}>
          Login
        </Button>
      </form>
    </div>
  );
};
