import React from "react";
import { useNavigate } from "react-router-dom";
import { Clock, ShieldCheck, ArrowRight, Info } from "lucide-react";
import styled from 'styled-components';
import { BotaoProximo, HeaderTop, ContainerPesquisaAtiva } from "../pesquisa/styles";

const CardAviso = styled.div`
  background: white;
  width: 90%;
  max-width: 450px;
  border-radius: 20px;
  padding: 30px;
  margin-top: 20px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const BadgeStatus = styled.div`
  background: #FFF3E0;
  color: #EF6C00;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
`;

export default function Processando() {
  const navigate = useNavigate();

  return (
    <ContainerPesquisaAtiva>
      <HeaderTop>
        <span>Status do Saque</span>
      </HeaderTop>

      <CardAviso>
        <BadgeStatus>
          <Clock size={14} /> PROCESSANDO SOLICITAÇÃO
        </BadgeStatus>

        <ShieldCheck size={70} color="#00B4D8" />
        
        <h2 style={{ color: '#1e293b', fontSize: '22px' }}>Saque em Análise</h2>
        
        <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.5' }}>
          Parabéns! Você completou todos os requisitos. Seus convites foram validados com sucesso.
        </p>

        <div style={{ 
          background: '#f8fafc', 
          padding: '15px', 
          borderRadius: '12px', 
          width: '100%',
          border: '1px solid #e2eff5',
          textAlign: 'left'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1e293b', marginBottom: '5px' }}>
            <Info size={16} color="#00B4D8" />
            <strong style={{fontSize: '14px'}}>Prazo Estimado:</strong>
          </div>
          <p style={{ margin: 0, color: '#00B4D8', fontWeight: '800', fontSize: '18px' }}>
            3 a 5 dias úteis
          </p>
          <span style={{ fontSize: '11px', color: '#94a3b8' }}>
            Este prazo é necessário para verificar a autenticidade das respostas e convites.
          </span>
        </div>

        <BotaoProximo onClick={() => navigate('/pesquisas')} style={{ marginTop: '10px' }}>
          Continuar Ganhando
          <ArrowRight size={20} />
        </BotaoProximo>

        <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '10px' }}>
          ID da Transação: #OP{Math.floor(Math.random() * 999999)}
        </p>
      </CardAviso>
    </ContainerPesquisaAtiva>
  );
}