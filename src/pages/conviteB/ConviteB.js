import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Share2, Copy, Users, Gift, CheckCircle } from "lucide-react";
import HeaderB from "../../components/headerB/HeaderB";
import api from "../../services/api";
import {
  ContainerConvite,
  HeaderAcao,
  CardDestaque,
  PassosIndica,
  Passo,
  InputLink,
  BotaoCopiar,
  StatusConvites
} from "./styles";

export default function ConviteB() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    async function carregarDados() {
      try {
        const token = localStorage.getItem("@Opinai:token");
        const res = await api.get("/api/user/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsuario(res.data);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    }
    carregarDados();
  }, []);

  // O link usa o ID do usuário para rastro (estratégia de marketing)
  const linkIndicacao = `https://opinai-premiado.netlify.app/cadastro?ref=${usuario?._id || "invite"}`;

  const copiarLink = () => {
    navigator.clipboard.writeText(linkIndicacao);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <ContainerConvite>
      <HeaderB />
      
      <HeaderAcao>
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={24} />
        </button>
        <h1>Indique e Ganhe</h1>
      </HeaderAcao>

      <CardDestaque>
        <Gift size={40} color="#FFD700" />
        <h2>Ganhe R$ 10,00 por indicação</h2>
        <p>Convide seus amigos e ganhe quando eles completarem a primeira pesquisa.</p>
      </CardDestaque>

      <PassosIndica>
        <Passo>
          <div className="num">1</div>
          <p>Copie seu link exclusivo abaixo.</p>
        </Passo>
        <Passo>
          <div className="num">2</div>
          <p>Envie para seus amigos no WhatsApp.</p>
        </Passo>
        <Passo>
          <div className="num">3</div>
          <p>Ganhe pontos assim que eles começarem!</p>
        </Passo>
      </PassosIndica>

      <div style={{ marginTop: "30px" }}>
        <span style={{ fontSize: "12px", color: "#666", fontWeight: "bold" }}>SEU LINK DE CONVITE</span>
        <InputLink>
          <input type="text" value={linkIndicacao} readOnly />
          <BotaoCopiar onClick={copiarLink} copiado={copiado}>
            {copiado ? <CheckCircle size={20} /> : <Copy size={20} />}
          </BotaoCopiar>
        </InputLink>
      </div>

      <StatusConvites>
        <div className="stat">
          <strong>0</strong>
          <span>Amigos inscritos</span>
        </div>
        <div className="stat">
          <strong>R$ 0,00</strong>
          <span>Total ganho</span>
        </div>
      </StatusConvites>

      <button 
        className="btn-whatsapp"
        onClick={() => window.open(`https://wa.me/?text=Olha, estou ganhando dinheiro respondendo pesquisas no OpinAí! Cadastre-se pelo meu link: ${linkIndicacao}`)}
      >
        <Share2 size={20} /> Compartilhar no WhatsApp
      </button>
    </ContainerConvite>
  );
}