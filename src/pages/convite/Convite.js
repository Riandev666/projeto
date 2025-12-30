import React from "react";
import { useNavigate } from "react-router-dom";
import { Users, Share2, AlertCircle, Copy, ArrowLeft } from "lucide-react";
import styled from 'styled-components'; 
import { BotaoProximo, HeaderTop, ContainerPesquisaAtiva } from "../pesquisa/styles";

const CardMeta = styled.div`
  background: white;
  width: 90%;
  max-width: 450px;
  border-radius: 20px;
  padding: 25px;
  margin-top: 20px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  border: 2px dashed #00B4D8;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function Convite() {
  const navigate = useNavigate();
  const linkConvite = `https://opinai.com/registrar?ref=user_${Math.floor(Math.random() * 1000)}`; 

  const copiarLink = () => {
    navigator.clipboard.writeText(linkConvite);
    alert("✅ Link de convite copiado!");
  };

  return (
    <ContainerPesquisaAtiva>
      <HeaderTop>
        <ArrowLeft onClick={() => navigate('/sacar')} size={24} style={{cursor: 'pointer'}} />
        <span>Verificação de Saque</span>
        <div style={{width: 24}} />
      </HeaderTop>

      <div style={{ padding: '20px', textAlign: 'center', width: '90%', maxWidth: '450px' }}>
        <AlertCircle size={60} color="#00B4D8" style={{ marginBottom: '15px' }} />
        <h2 style={{ color: '#1e293b', marginBottom: '10px' }}>Quase lá!</h2>
        <p style={{ color: '#64748b', fontSize: '15px' }}>
          Para liberar seu primeiro saque, você precisa convidar 
          <strong style={{ color: '#00B4D8' }}> 5 amigos </strong> para a plataforma.
        </p>
      </div>

      <CardMeta>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 'bold' }}>AMIGOS CONVIDADOS</span>
            <h3 style={{ fontSize: '28px', color: '#1e293b' }}>0 / 5</h3>
          </div>
          <Users size={40} color="#00B4D8" opacity={0.5} />
        </div>
        <div style={{ width: '100%', height: '10px', background: '#e2eff5', borderRadius: '5px', marginTop: '10px', overflow: 'hidden' }}>
          <div style={{ width: '10%', height: '100%', background: '#00B4D8', borderRadius: '5px' }} />
        </div>
      </CardMeta>

      <div style={{ width: '90%', maxWidth: '450px', marginTop: '30px' }}>
        <div style={{ 
          display: 'flex', background: 'white', padding: '15px', borderRadius: '12px', 
          border: '2px solid #e2eff5', alignItems: 'center', justifyContent: 'space-between' 
        }}>
          <code style={{ fontSize: '12px', color: '#00B4D8', fontWeight: 'bold' }}>{linkConvite}</code>
          <Copy size={20} color="#00B4D8" onClick={copiarLink} style={{ cursor: 'pointer' }} />
        </div>

        <BotaoProximo 
          onClick={() => window.open(`https://api.whatsapp.com/send?text=Ganhe dinheiro respondendo pesquisas! Inscreva-se: ${linkConvite}`)} 
          style={{ background: '#25D366', marginTop: '20px', border: 'none' }}
        >
          <Share2 size={20} />
          Convidar no WhatsApp
        </BotaoProximo>

        <button 
          onClick={() => navigate('/pesquisas')}
          style={{ width: '100%', background: 'transparent', border: 'none', color: '#64748b', marginTop: '20px', fontWeight: '700', cursor: 'pointer' }}
        >
          Voltar e ganhar mais saldo
        </button>
      </div>
    </ContainerPesquisaAtiva>
  );
}