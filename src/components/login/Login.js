import React, { useState } from 'react';
import styled from 'styled-components';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #121212;
  color: white;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #e50914;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d40813;
  }
`;

const ErrorMessage = styled.p`
  color: red;
`;

const mockUser = {
    username: 'user1',
    password: '123'
};

function LoginPage({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === mockUser.username && password === mockUser.password) {
            localStorage.setItem('isAuthenticated', 'true');
            onLogin();
        } else {
            setError('Credenciais inválidas!');
        }
    };

    return (
        <LoginWrapper>
            <LoginForm onSubmit={handleSubmit}>
                <h2>Login</h2>
                <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit">Login</Button>
                {error && <ErrorMessage>{error}</ErrorMessage>}
            </LoginForm>
        </LoginWrapper>
    );
}

export default LoginPage;
