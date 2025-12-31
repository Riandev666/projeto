import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, User, Phone, CreditCard, History, Coins, LogOut } from "lucide-react";
import HeaderB from "../../components/headerB/HeaderB";
import api from "../../services/api";
import {
  ContainerPerfil,
  HeaderAcao,
  SecaoUsuario,
  FotoPerfil,
  CardsDados,
  CardInfo,
  ListaTransacoes,
  ItemTransacao,
  ValorTransacao,
  BotaoSair
} from "./styles";

export default function Usuario() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarDados() {
      try {
        const token = localStorage.getItem("@Opinai:token");
        const res = await api.get("/api/user/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsuario(res.data);
      } catch (error) {
        console.error("Erro ao carregar perfil:", error);
        navigate("/google"); // Se der erro, volta pro login
      } finally {
        setLoading(false);
      }
    }
    carregarDados();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/google");
  };

  if (loading) return <p style={{ textAlign: "center", marginTop: "50px" }}>Carregando perfil...</p>;

  return (
    <ContainerPerfil>
      <HeaderB />
      
      <HeaderAcao>
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={24} color="#333" />
        </button>
        <h1>Minha Conta</h1>
      </HeaderAcao>

      <SecaoUsuario>
        <FotoPerfil src={usuario?.foto || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="Foto" />
        <h2>{usuario?.nome || "Usuário"}</h2>
        <span className="saldo-badge">{usuario?.pontos || 0} pontos acumulados</span>
      </SecaoUsuario>

      <CardsDados>
        <CardInfo>
          <div className="label"><User size={16} /> E-mail</div>
          <div className="valor">{usuario?.email}</div>
        </CardInfo>
        <CardInfo>
          <div className="label"><Phone size={16} /> Celular</div>
          <div className="valor">{usuario?.celular || "(00) 00000-0000"}</div>
        </CardInfo>
        <CardInfo>
          <div className="label"><CreditCard size={16} /> CPF</div>
          <div className="valor">{usuario?.cpf || "000.000.000-00"}</div>
        </CardInfo>
      </CardsDados>

      <h3 style={{ margin: "30px 0 15px", fontSize: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
        <History size={18} /> Extrato de Ganhos
      </h3>

      <ListaTransacoes>
        {usuario?.pesquisasRespondidas?.length > 0 ? (
          usuario.pesquisasRespondidas.map((pesquisa, index) => (
            <ItemTransacao key={index}>
              <div className="icon"><Coins size={20} color="#00B4D8" /></div>
              <div className="info">
                <strong>Pesquisa Respondida</strong>
                <span>ID: {pesquisa?._id?.substring(0, 8)}</span>
              </div>
              <ValorTransacao>
                <div className="valor">+ R$ {pesquisa?.valor || "5,00"}</div>
                <div className="data">Hoje</div>
              </ValorTransacao>
            </ItemTransacao>
          ))
        ) : (
          <p style={{ textAlign: "center", color: "#999", padding: "20px" }}>Você ainda não realizou pesquisas.</p>
        )}
      </ListaTransacoes>

      <BotaoSair onClick={handleLogout}>
        <LogOut size={20} /> Sair da Conta
      </BotaoSair>
    </ContainerPerfil>
  );
}