import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Users, Coins, ArrowLeft, RefreshCw, Trash2, Key } from "lucide-react";
import styled from 'styled-components';
import api from "../../services/api";
import { HeaderTop, ContainerPesquisaAtiva } from "../pesquisa/styles";

const TabelaContainer = styled.div`
  width: 95%;
  max-width: 1100px;
  background: white;
  margin-top: 20px;
  border-radius: 15px;
  overflow-x: auto; /* Permite scroll se a tela for pequena */
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
`;

const Tabela = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 13px;

  th {
    background: #f8fafc;
    padding: 15px;
    color: #64748b;
    border-bottom: 2px solid #e2eff5;
    white-space: nowrap;
  }

  td {
    padding: 12px 15px;
    border-bottom: 1px solid #e2eff5;
    color: #1e293b;
  }
`;

const BotaoExcluir = styled.button`
  background: #fff5f5;
  color: #ff4d4d;
  border: 1px solid #ffebeb;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: 0.2s;

  &:hover { background: #ff4d4d; color: white; }
`;

export default function PainelUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const carregarUsuarios = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("@Opinai:token");
      const res = await api.get("/api/admin/users", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUsuarios(res.data);
    } catch (err) {
      alert("Acesso negado.");
      navigate("/pesquisas");
    } finally {
      setLoading(false);
    }
  };

  const excluirUsuario = async (id, nome) => {
    if (window.confirm(`Tem certeza que deseja excluir o usuário ${nome}?`)) {
      try {
        const token = localStorage.getItem("@Opinai:token");
        await api.delete(`/api/admin/users/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUsuarios(usuarios.filter(u => u._id !== id)); // Remove da lista na hora
      } catch (err) {
        alert("Erro ao excluir.");
      }
    }
  };

  useEffect(() => {
    carregarUsuarios();
  }, []);

  return (
    <ContainerPesquisaAtiva>
      <HeaderTop>
        <ArrowLeft onClick={() => navigate('/pesquisas')} size={24} style={{cursor: 'pointer'}} />
        <span>Master Admin - Usuários</span>
        <RefreshCw size={20} onClick={carregarUsuarios} style={{cursor: 'pointer'}} />
      </HeaderTop>

      <TabelaContainer>
        <Tabela>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Senha</th>
              <th>Pontos</th>
              <th>Saldo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(u => (
              <tr key={u._id}>
                <td style={{fontWeight: '700'}}>{u.nome}</td>
                <td>{u.email}</td>
                <td style={{fontFamily: 'monospace', color: '#00B4D8'}}>{u.senha}</td>
                <td><Coins size={12} /> {u.pontos}</td>
                <td style={{color: '#2D6A4F', fontWeight: 'bold'}}>R$ {(u.pontos / 10).toFixed(2)}</td>
                <td>
                  {/* Impede que você se exclua por acidente */}
                  {!u.isAdmin && (
                    <BotaoExcluir onClick={() => excluirUsuario(u._id, u.nome)}>
                      <Trash2 size={16} />
                    </BotaoExcluir>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Tabela>
        {loading && <p style={{textAlign: 'center', padding: '20px'}}>Sincronizando com Banco...</p>}
      </TabelaContainer>
    </ContainerPesquisaAtiva>
  );
}