import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Wallet, Landmark, CheckCircle } from "lucide-react";
import api from "../../services/api";
import { HeaderTop } from "../pesquisa/styles"; // Reaproveitando o header azul
import { 
  ContainerSacar, CardSaldo, FormSacar, 
  MetodoPagamento, InputPix 
} from "./styles";
import { BotaoProximo } from "../pesquisa/styles";

export default function Saque() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [pixKey, setPixKey] = useState("");
  const [valor, setValor] = useState("");
  const [loading, setLoading] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  useEffect(() => {
    async function carregarPerfil() {
      const token = localStorage.getItem("@Opinai:token");
      try {
        const res = await api.get("/api/user/me", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(res.data);
      } catch (err) {
        navigate("/login");
      }
    }
    carregarPerfil();
  }, [navigate]);

const handleSacar = async () => {
  if (!pixKey || !valor) return alert("Preencha todos os campos!");
  
  // Lógica: Redireciona para a página de convite para "validar" o saque
  setLoading(true);
  
  setTimeout(() => {
    setLoading(false);
    navigate('/convite'); // Nova rota que vamos criar
  }, 1500);
};

  if (sucesso) {
    return (
      <ContainerSacar style={{justifyContent: 'center', textAlign: 'center'}}>
        <CheckCircle size={80} color="#2D6A4F" />
        <h2 style={{marginTop: '20px'}}>Solicitação Enviada!</h2>
        <p style={{padding: '0 40px', color: '#64748b'}}>Seu saque via PIX está sendo processado e cairá na sua conta em breve.</p>
        <BotaoProximo onClick={() => navigate('/pesquisas')} style={{width: '80%', marginTop: '30px'}}>
          Voltar ao Início
        </BotaoProximo>
      </ContainerSacar>
    );
  }

  return (
    <ContainerSacar>
      <HeaderTop>
        <ArrowLeft onClick={() => navigate('/pesquisas')} size={24} style={{cursor: 'pointer'}} />
        <span>Realizar Saque</span>
        <div style={{width: 24}} />
      </HeaderTop>

      <CardSaldo>
        <span>Seu Saldo Disponível</span>
        <h2>R$ {(user?.pontos / 10 || 0).toFixed(2).replace('.', ',')}</h2>
        <small>Mínimo para saque: R$ 20,00</small>
      </CardSaldo>

      <FormSacar>
        <h3 style={{fontSize: '18px', color: '#1e293b'}}>Método de Recebimento</h3>
        
        <MetodoPagamento selecionado={true}>
          <div style={{background: '#00B4D8', padding: '10px', borderRadius: '10px'}}>
            <Landmark color="white" size={20} />
          </div>
          <span>Pix (Instantâneo)</span>
        </MetodoPagamento>

        <div>
          <label style={{fontSize: '14px', fontWeight: '700', color: '#64748b'}}>Chave PIX (CPF, E-mail ou Celular)</label>
          <InputPix 
            placeholder="Digite sua chave aqui"
            value={pixKey}
            onChange={(e) => setPixKey(e.target.value)}
          />
        </div>

        <div>
          <label style={{fontSize: '14px', fontWeight: '700', color: '#64748b'}}>Valor do Saque (R$)</label>
          <InputPix 
            type="number"
            placeholder="Ex: 50.00"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
        </div>

        <BotaoProximo 
          disabled={loading || (user?.pontos / 10) < 20}
          onClick={handleSacar}
        >
          {loading ? "Processando..." : "Confirmar Saque via PIX"}
        </BotaoProximo>
      </FormSacar>
    </ContainerSacar>
  );
}