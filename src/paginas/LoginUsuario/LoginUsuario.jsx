import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

function LoginUsuario() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        const userData = { login, password };

        try {
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                const token = await response.json();
                localStorage.setItem("Token",  JSON.stringify(token.token));
                console.log('Login efetuado com sucesso!');
                navigate('/areausuario');
            } else {
                const errorMessage = await response.text();
                setError(errorMessage);
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            setError('Erro ao fazer login. Por favor, tente novamente mais tarde.');
        }
    };

    return (
        <div className="container">
            <h2>Login de Usuário</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Login:</label>
                    <input
                        type="text"
                        value={login}
                        required
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="custom-button">Login</button>
            </form>
        </div>
    );
}

export default LoginUsuario;
