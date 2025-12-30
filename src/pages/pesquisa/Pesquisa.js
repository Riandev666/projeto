import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, ChevronRight, Square, CheckSquare, Circle, Dot } from "lucide-react";
import api from "../../services/api";
import { 
  ContainerPesquisaAtiva, HeaderTop, CardForms, 
  PerguntaTexto, InputRespostaForms, BotaoProximo, ContainerSucesso 
} from "./styles";

export default function Pesquisa() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pesquisa, setPesquisa] = useState(null);
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostas, setRespostas] = useState({});
  const [concluido, setConcluido] = useState(false);
  const [enviando, setEnviando] = useState(false);

  useEffect(() => {
    async function carregarDados() {
      try {
        const res = await api.get("/api/surveys");
        const encontrada = res.data.find(p => p._id === id);

        setPesquisa(encontrada); 
      } catch (err) {
        console.error("Erro ao carregar dados do Render");
      }
    }
    carregarDados();
  }, [id]);

  const itemAtual = pesquisa?.perguntas[perguntaAtual];

  const handleRespostaMultipla = (opcao) => {
    const respostasAtuais = respostas[perguntaAtual] || [];
    if (respostasAtuais.includes(opcao)) {
      setRespostas({ ...respostas, [perguntaAtual]: respostasAtuais.filter(i => i !== opcao) });
    } else {
      setRespostas({ ...respostas, [perguntaAtual]: [...respostasAtuais, opcao] });
    }
  };

  const handleProxima = () => {
    if (perguntaAtual < pesquisa.perguntas.length - 1) {
      setPerguntaAtual(perguntaAtual + 1);
    } else {
      finalizarPesquisa();
    }
  };

  const finalizarPesquisa = async () => {
    setEnviando(true);
    const token = localStorage.getItem("@Opinai:token");
    try {
      await api.post("/api/surveys/complete", { 
        surveyId: id, 
        valor: pesquisa.valor 
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setConcluido(true);
    } catch (err) {
      alert("Erro ao salvar recompensas");
    } finally {
      setEnviando(false);
    }
  };

  if (!pesquisa) return <ContainerPesquisaAtiva><p style={{marginTop: '50px'}}>Carregando azul...</p></ContainerPesquisaAtiva>;

  if (concluido) {
    return (
      <ContainerPesquisaAtiva style={{ justifyContent: 'center' }}>
        <CardForms>
          <ContainerSucesso>
            <CheckCircle size={60} color="#2D6A4F" />
            <h2>Concluído!</h2>
            <div className="valor">+ R$ {pesquisa.valor}</div>
            <BotaoProximo onClick={() => navigate('/pesquisas')}>Voltar ao Início</BotaoProximo>
          </ContainerSucesso>
        </CardForms>
      </ContainerPesquisaAtiva>
    );
  }

  return (
    <ContainerPesquisaAtiva>
      <HeaderTop>
        <ArrowLeft onClick={() => navigate('/pesquisas')} size={24} style={{cursor: 'pointer'}} />
        <span>{pesquisa.nome}</span>
        <div style={{width: 24}} /> 
      </HeaderTop>

      <div style={{ width: '90%', maxWidth: '450px', marginBottom: '15px' }}>
        <div style={{ width: '100%', height: '8px', background: '#e2eff5', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ 
            width: `${((perguntaAtual + 1) / pesquisa.perguntas.length) * 100}%`, 
            height: '100%', 
            background: '#00B4D8', 
            transition: 'width 0.4s ease'
          }} />
        </div>
      </div>

      <CardForms>
        <PerguntaTexto>{itemAtual.texto}</PerguntaTexto>
        
        {itemAtual.tipo === "texto" && (
          <InputRespostaForms 
            placeholder="Sua resposta..." 
            value={respostas[perguntaAtual] || ""}
            onChange={(e) => setRespostas({ ...respostas, [perguntaAtual]: e.target.value })}
          />
        )}

        {(itemAtual.tipo === "selecao" || itemAtual.tipo === "multipla") && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {itemAtual.opcoes.map((opcao, index) => {
              const selecionado = itemAtual.tipo === "selecao" 
                ? respostas[perguntaAtual] === opcao 
                : (respostas[perguntaAtual] || []).includes(opcao);

              return (
                <div 
                  key={index}
                  onClick={() => itemAtual.tipo === "selecao" 
                    ? setRespostas({...respostas, [perguntaAtual]: opcao})
                    : handleRespostaMultipla(opcao)
                  }
                  style={{
                    display: 'flex', alignItems: 'center', gap: '12px', padding: '15px',
                    borderRadius: '12px', border: `2px solid ${selecionado ? '#00B4D8' : '#e2eff5'}`,
                    background: selecionado ? '#f0fbff' : 'white', cursor: 'pointer'
                  }}
                >
                  {itemAtual.tipo === "selecao" ? (
                    selecionado ? <Dot color="#00B4D8" strokeWidth={8} /> : <Circle color="#cbd5e0" />
                  ) : (
                    selecionado ? <CheckSquare color="#00B4D8" /> : <Square color="#cbd5e0" />
                  )}
                  <span style={{color: selecionado ? '#00B4D8' : '#4a5568', fontWeight: selecionado ? '700' : '400'}}>{opcao}</span>
                </div>
              );
            })}
          </div>
        )}

        <BotaoProximo 
          onClick={handleProxima} 
          disabled={enviando || !respostas[perguntaAtual] || (Array.isArray(respostas[perguntaAtual]) && respostas[perguntaAtual].length === 0)}
        >
          {enviando ? "Enviando..." : (perguntaAtual === pesquisa.perguntas.length - 1 ? "Finalizar" : "Próxima")}
          <ChevronRight size={20} />
        </BotaoProximo>
      </CardForms>
    </ContainerPesquisaAtiva>
  );
}