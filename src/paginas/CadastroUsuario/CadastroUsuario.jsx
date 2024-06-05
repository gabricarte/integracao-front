import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { encrypt } from '../../utils/encrypt';
import '../../App.css';

function CadastroUsuario() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleCadastro = async (event) => {
        event.preventDefault();
        const userData = { login, password, role: "USER" };
        console.log(userData);

        try {
            const response = await fetch('http://localhost:8080/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                console.log('Cadastro efetuado com sucesso!');
                setLogin('');
                setPassword('');
                navigate('/arearestrita');
            } else {
                const errorMessage = await response.text();
                setError(errorMessage);
            }
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
            setError('Erro ao cadastrar. Por favor, tente novamente mais tarde.');
        }
    };

    return (
        <div className="container">
            <h2>Cadastro de Usuário</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleCadastro}>
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
                <button type="submit" className="custom-button">Cadastrar</button>
            </form>
        </div>
    );
}

export default CadastroUsuario;
