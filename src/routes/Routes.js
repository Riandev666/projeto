import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Cadastro from '../pages/cadastro/Cadastro';
import Login from '../pages/login/Login';
import Face from '../pages/face/Face';
import Insta from '../pages/insta/Insta';
import Google from '../pages/google/Google';
import Pesquisas from '../pages/pesquisas/Pesquisas';
import Pesquisa from '../pages/pesquisa/Pesquisa';
import Saque from '../pages/saque/Saque';
import Convite from '../pages/convite/Convite';
import ConviteB from '../pages/conviteB/ConviteB';
import Processando from '../pages/processando/Processando';
import Perfil from '../pages/perfil/Perfil';
import Usuario from '../pages/usuario/Usuario';
import AdminPesquisas from '../pages/adminPesquisas/AdminPesquisas';
import Painel from '../pages/painel/Painel';


export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/face" element={<Face/>} />
        <Route path="/insta" element={<Insta/>} />
        <Route path="/google" element={<Google/>} />
        <Route path="/pesquisas" element={<Pesquisas/>} />
        <Route path="/responder/:id" element={<Pesquisa />} />
        <Route path="/admin/pesquisas" element={<AdminPesquisas/>} />
        <Route path="/saque" element={<Saque/>} />
        <Route path="/convite" element={<Convite/>} />
        <Route path="/convidar" element={<ConviteB/>} />
        <Route path="/processando" element={<Processando/>} />
        <Route path='/perfil' element={<Perfil/>} />
        <Route path='/usuario' element={<Usuario/>} />
        <Route path="/admin/usuarios" element={<Painel/>} />
      </Routes>
    </Router>
  );
}

