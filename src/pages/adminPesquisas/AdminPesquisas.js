import React, { useState } from "react";
import { PlusCircle, ArrowLeft, Trash2, ListPlus, AlignLeft, CheckSquare, Type } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { 
  ContainerAdmin, HeaderAdmin, FormMobile, Label, 
  InputMobile, BotaoAcao 
} from "./styles";

export default function AdminPesquisas() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [tempo, setTempo] = useState("");
  const [valor, setValor] = useState("");

  const [perguntas, setPerguntas] = useState([
    { texto: "", tipo: "texto", opcoes: [""] }
  ]);

  const adicionarPergunta = (tipo) => {
    setPerguntas([...perguntas, { texto: "", tipo, opcoes: tipo === "texto" ? [] : [""] }]);
  };

  const removerPergunta = (index) => {
    setPerguntas(perguntas.filter((_, i) => i !== index));
  };

  const handleTextoPergunta = (index, value) => {
    const novas = [...perguntas];
    novas[index].texto = value;
    setPerguntas(novas);
  };

  const adicionarOpcao = (pIndex) => {
    const novas = [...perguntas];
    novas[pIndex].opcoes.push("");
    setPerguntas(novas);
  };

  const handleOpcaoChange = (pIndex, oIndex, value) => {
    const novas = [...perguntas];
    novas[pIndex].opcoes[oIndex] = value;
    setPerguntas(novas);
  };

  const cadastrar = async () => {
    if (!nome || perguntas.some(p => !p.texto)) {
      alert("Preencha o título e todas as perguntas!");
      return;
    }

    const token = localStorage.getItem("@Opinai:token");

    try {
      await api.post("/api/surveys", {
        nome,
        tempo: tempo || "3 min",
        valor: valor || "1.00",
        perguntas
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      alert("✅ Pesquisa complexa publicada!");
      navigate("/pesquisas");
    } catch (error) {
      alert("❌ Erro ao publicar no Render.");
    }
  };

  return (
    <ContainerAdmin>
      <header style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
        <ArrowLeft onClick={() => navigate('/pesquisas')} size={24} style={{cursor: 'pointer', color: '#00B4D8'}} />
        <HeaderAdmin>
          <h2 style={{color: '#00B4D8'}}>Criar Pesquisa Pro</h2>
        </HeaderAdmin>
      </header>

      <FormMobile style={{ borderTop: '8px solid #00B4D8' }}>
        <Label>Configurações da Pesquisa</Label>
        <InputMobile 
          placeholder="Título da Pesquisa (ex: Hábitos de Consumo)" 
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
        <div style={{display: 'flex', gap: '10px'}}>
          <InputMobile placeholder="Tempo (ex: 5 min)" value={tempo} onChange={e => setTempo(e.target.value)} />
          <InputMobile placeholder="Recompensa R$" value={valor} onChange={e => setValor(e.target.value)} />
        </div>
      </FormMobile>

      <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {perguntas.map((p, pIndex) => (
          <FormMobile key={pIndex} style={{ borderLeft: '6px solid #00B4D8' }}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <Label>Pergunta {pIndex + 1} ({p.tipo.toUpperCase()})</Label>
              <Trash2 size={18} color="#ff4d4d" onClick={() => removerPergunta(pIndex)} style={{cursor: 'pointer'}}/>
            </div>

            <InputMobile 
              placeholder="Digite o enunciado da pergunta..." 
              value={p.texto}
              onChange={e => handleTextoPergunta(pIndex, e.target.value)}
              style={{fontWeight: 'bold'}}
            />

            {p.tipo !== "texto" && (
              <div style={{marginLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                {p.opcoes.map((opcao, oIndex) => (
                  <div key={oIndex} style={{display: 'flex', gap: '10px'}}>
                    <div style={{width: '20px', height: '20px', borderRadius: p.tipo === 'selecao' ? '50%' : '4px', border: '2px solid #00B4D8'}} />
                    <input 
                      style={{border: 'none', borderBottom: '1px solid #eee', width: '100%', outline: 'none'}}
                      placeholder={`Opção ${oIndex + 1}`}
                      value={opcao}
                      onChange={e => handleOpcaoChange(pIndex, oIndex, e.target.value)}
                    />
                  </div>
                ))}
                <button 
                  onClick={() => adicionarOpcao(pIndex)}
                  style={{background: 'none', border: 'none', color: '#00B4D8', fontSize: '12px', fontWeight: 'bold', textAlign: 'left', cursor: 'pointer'}}
                >
                  + Adicionar Opção
                </button>
              </div>
            )}
          </FormMobile>
        ))}
      </div>

      <div style={{ 
        position: 'sticky', bottom: '20px', background: 'white', padding: '15px', 
        borderRadius: '50px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        display: 'flex', justifyContent: 'space-around', marginTop: '20px'
      }}>
        <Type size={24} color="#00B4D8" onClick={() => adicionarPergunta('texto')} style={{cursor: 'pointer'}} />
        <AlignLeft size={24} color="#00B4D8" onClick={() => adicionarPergunta('selecao')} style={{cursor: 'pointer'}} />
        <CheckSquare size={24} color="#00B4D8" onClick={() => adicionarPergunta('multipla')} style={{cursor: 'pointer'}} />
      </div>

      <BotaoAcao onClick={cadastrar} style={{background: '#00B4D8', marginTop: '30px', marginBottom: '50px'}}>
        <PlusCircle size={20} />
        Publicar Pesquisa Pro
      </BotaoAcao>
    </ContainerAdmin>
  );
}