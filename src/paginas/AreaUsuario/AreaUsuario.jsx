import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'; 

function AreaUsuario() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem('TOKEN');
    if (token) {
      try {
        // decodificando o token JWT
        const decoded = jwtDecode(token);
        setUserData(decoded);
      } catch (error) {
        console.error('Erro ao decodificar o token:', error);
      }
    } else {
      console.error('Token não encontrado no sessionStorage');
    }
  }, []); 

  return (
    <div>
      <h1>Área do usuário</h1>
      {userData && (
        <div>
          <p>ID do usuário: {userData.fornecedorId}</p>
          <p>Papel (role): {userData.role}</p>
        </div>
      )}
    </div>
  );
}

export default AreaUsuario;
