import React, { useEffect } from 'react'
import {Link} from 'react-router-dom';


function TelaInicial() {

        useEffect(() => {
                sessionStorage.removeItem("TOKEN");
              });
  return (
    <div className='container'>
        <h1>Olá! </h1>
        {/* <Link  to="/cadastrofornecedor" style={{textDecoration: "none"}}>
                <button type="submit" className="custom-button">Cadastro de fornecedores</button>
        </Link> */}

        <Link  to="/login" style={{textDecoration: "none"}}>
                <button type="submit" className="custom-button">Fazer login como fornecedor</button>
        </Link>

               
        <Link  to="/loginadmin" style={{textDecoration: "none"}}>
                <button type="submit" className="custom-button">Fazer login como admin</button>
        </Link>

        {/* <Link  to="/cadastrousuario" style={{textDecoration: "none"}}>
                <button type="submit" className="custom-button">Fazer cadastro de usuário</button>
        </Link>

        <Link  to="/loginusuario" style={{textDecoration: "none"}}>
                <button type="submit" className="custom-button">Fazer login de usuário</button>
        </Link> */}



    </div>
  )
}

export default TelaInicial