import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { encrypt } from '../../utils/encrypt'; 


const LoginAdmin = () => {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 

    useEffect(() => {
        sessionStorage.removeItem("TOKEN");
      });

    const handleLoginAdmin = async (event) => {

        event.preventDefault();
        const credentials = { nome, senha };
        try {
            const response = await fetch('http://localhost:8080/fornecedor/login/admin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa('admin:Admin@123.') 
                },
                body: JSON.stringify(credentials)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login efetuado com sucesso!');
                sessionStorage.setItem('TOKEN', data.token);
                
                navigate('/arearestrita'); 
            } else  if (response.status === 401){
                setError("Dados incorretos!");
            } else{
                setError("Erro do servidor!");
            }
        } catch (error) {
            console.error('Erro ao cadastrar admin:', error);
            setError('Erro ao cadastrar admin. Por favor, tente novamente mais tarde.');
        }



    };

    return (
        <div className="container"> 
            <h1>Login Admin</h1>
            <form onSubmit={handleLoginAdmin}>
                <div className="form-group"> 
                    <label>Username:</label>
                    <input 
                        type="text" 
                        name="nome" 
                        placeholder="username" 
                        autoComplete="off" 
                        required 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
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
            {error ? <p>Dados incorretos!</p> : ""}
            </form>
        </div>
    );
}

export default LoginAdmin;
