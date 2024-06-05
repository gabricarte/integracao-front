import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { encrypt } from '../../utils/encrypt'; 

const Login = ({ onLogin }) => {
    const [cnpj, setCnpj] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 

    const handleLogin = async (event) => {
        event.preventDefault();
        const credentials = { cnpj, senha };

        try {
            const response = await fetch('http://localhost:8080/fornecedor/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa('Fornecedor:Fornecedor@123.') 
                },
                body: JSON.stringify(credentials)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login efetuado com sucesso!');
                console.log(JSON.stringify(data.token));
                sessionStorage.setItem('TOKEN', data.token);
                navigate('/areausuario'); 
            } else if (response.status === 401) {
                setError("Dados incorretos!");
            } else {
                setError("Erro do servidor!");
            }
        } catch (error) {
            console.error('Erro ao realizar o login:', error);
            setError('Erro ao realizar o login. Por favor, tente novamente mais tarde.');
        }
    }
    
    useEffect(() => {
        sessionStorage.removeItem("TOKEN");
      });

    return (
        <div className="container"> 
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>CNPJ:</label>
                    <input 
                        type="text" 
                        name="cnpj" 
                        placeholder="CNPJ" 
                        autoComplete="off" 
                        required 
                        value={cnpj} 
                        onChange={(e) => setCnpj(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label>Senha:</label>
                    <input 
                        type="password" 
                        name="senha" 
                        placeholder="Senha" 
                        required 
                        value={senha} 
                        onChange={(e) => setSenha(e.target.value)} 
                    />
                </div>
                <button type="submit" className="custom-button">Login</button> {/* Aplica a classe custom-button */}
                {error && <p>{error}</p>}
            </form>
        </div>
    );
}

export default Login;
