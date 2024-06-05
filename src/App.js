import React, { useState } from 'react';
import Login from './paginas/Login/Login';
import AreaRestrita from './paginas/AreaRestrita/AreaRestrita';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TelaInicial from './paginas/TelaInicial/TelaInicial';
import LoginAdmin from './paginas/LoginAdmin/LoginAdmin';
import CadastroFornecedor from './paginas/CadastroFornecedor/CadastroFornecedor';
import CadastroUsuario from './paginas/CadastroUsuario/CadastroUsuario';
import LoginUsuario from './paginas/LoginUsuario/LoginUsuario';
import AreaUsuario from './paginas/AreaUsuario/AreaUsuario';

const App = () => {

    return (
        <div className="App">

        <Router>
            <Routes>

            <Route path="/"
            element={
            <div>
            <TelaInicial/>
            </div>
            }
            >
            </Route>

         
   
            <Route path="/cadastrofornecedor"
            element={
            <div>
            < CadastroFornecedor />
            </div>
            }
            >
            </Route>

            
            <Route path="/login"
            element={
            <div>
            <Login/>
            </div>
            }
            >
            </Route>

            <Route path="/arearestrita"
            element={
            <div>
            <AreaRestrita/>
            </div>
            }
            >
            </Route>

            <Route path="/loginadmin"
            element={
            <div>
            <LoginAdmin/>
            </div>
            }
            >
            </Route>

            <Route path="/cadastrousuario"
            element={
            <div>
            <CadastroUsuario/>
            </div>
            }
            >
            </Route>

            
            <Route path="/loginusuario"
            element={
            <div>
            <LoginUsuario/>
            </div>
            }
            >
            </Route>

            <Route path="/areausuario"
            element={
            <div>
            <AreaUsuario/>
            </div>
            }
            >
            </Route>


            </Routes>
        </Router>
        </div>
    );
}

export default App;
