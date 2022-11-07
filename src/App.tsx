
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/estaticos/footer/Footer';

import Navbar from './components/estaticos/navbar/Navbar';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deleteTema/DeleteTema';
import ListaTema from './components/temas/listaTema/ListaTema';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';


function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/cadastroTema" element={<CadastroTema />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/formularioTema/:id" element={<CadastroTema/>} />
          <Route path="/deleteTema/:id" element={<DeletarTema/>} />
        </Routes>
      </div>
      <Footer />
    </Router>



  );
}

export default App;
