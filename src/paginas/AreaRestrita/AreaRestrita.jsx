import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import '../../App.css';

const AreaRestrita = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState('');

    useEffect(() => {
        const storedToken = sessionStorage.getItem('TOKEN');
        if (storedToken) {
            const decoded = jwtDecode(storedToken);
            setRole(decoded.role);       
         }
    }, []);

    const handleLogout = () => {
        console.log("logout clicked");
        sessionStorage.removeItem("TOKEN");
        navigate("/");
    };

    return (
        <div className='areaRestrita'>
            <div className="header">
            <h1>Área Restrita</h1> 
            
            {role === "ROLE_FORNECEDOR" || role === "ROLE_ADMIN" ? 
                        <button onClick={handleLogout} className="custom-button">Logout</button>
                        : ""
            }

            </div>
            {
                role === "ROLE_FORNECEDOR" ? (

                    <div className="container">
                        <p>Olá, fornecedor</p>
         
                        <button className="custom-button" >Cadastrar produto</button>

                        <button className="custom-button">Atualizar produto</button>

                        <button className="custom-button" >Remover produto</button>

                        <button className="custom-button">Visualizar pedidos</button>
                    </div>
                ) : role === "ROLE_ADMIN" ? (
                    <div className="container">
                    <p>Olá, admin</p>
     
                    <button className="custom-button" >Visualizar fornecedores</button>

                    <button className="custom-button">Excluir fornecedor</button>
                </div>
                ) : (
                    <p>Acesso negado</p>
                )
            }
        </div>
    );
}

export default AreaRestrita;
