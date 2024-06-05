import { useState } from "react";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { encrypt } from '../../utils/encrypt'; 

function CadastroFornecedor() {
    const [cnpj, setCnpj] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 

    const handleCadastro = async (event) => {
        event.preventDefault();
        const userData = { cnpj, senha };

        try {
            const response = await fetch('http://localhost:8080/cadastro/fornecedor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa('admin:Admin@123.') 
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Cadastro efetuado com sucesso!');
                setCnpj('');
                setSenha('');
                sessionStorage.setItem('ROLE', encrypt('ROLE_FORNECEDOR'));
                sessionStorage.setItem('ID', encrypt(JSON.stringify(data.id)));
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
            <h2>Cadastro de Fornecedor</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleCadastro}>
                <div className="form-group">
                    <label>CNPJ:</label>
                    <input
                        type="text"
                        value={cnpj}
                        required
                        onChange={(e) => setCnpj(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Senha:</label>
                    <input
                        type="password"
                        value={senha}
                        required
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
                <button type="submit" className="custom-button">Cadastrar</button>
            </form>
        </div>
    );
}

export default CadastroFornecedor;
