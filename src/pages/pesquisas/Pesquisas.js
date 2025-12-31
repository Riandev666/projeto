import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Clock, Calendar, Banknote, CheckCircle2, Wallet } from "lucide-react";
import HeaderB from "../../components/headerB/HeaderB";
import api from "../../services/api"; // Importe sua instância da API
import {
  ContainerPesquisas,
  BannerAzul,
  BannerBonus,
  CardSaldo,
  InfoUsuario,
  ContainerValores,
  BarraProgressoContainer,
  BarraAtiva,
  BotaoSacar,
  ListaPesquisas,
  CardPesquisa,
  CodigoPesquisa,
  InfoRow,
  BotaoResponder,
} from "./styles";

export default function Pesquisas() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    nome: "Carregando...",
    pontos: 0,
    foto: "",
  });
  const [pesquisasDisponiveis, setPesquisasDisponiveis] = useState([]);
  const [loading, setLoading] = useState(true);

  const metaPontos = 1000;
  const saldoDinheiro = (usuario.pontos / 10).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const percentual = Math.min((usuario.pontos / metaPontos) * 100, 100);
  const podeSacar = usuario.pontos >= metaPontos;

  const finalizarPesquisa = async (surveyId, valor) => {
    const token = localStorage.getItem("@Opinai:token");

    try {
      const response = await api.post(
        "/api/surveys/complete",
        { surveyId, valor },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Atualiza o estado local para o usuário ver o saldo subir na hora
      setUsuario((prev) => ({ ...prev, pontos: response.data.novosPontos }));
      alert(`Parabéns! Você recebeu a recompensa de R$ ${valor}`);
    } catch (error) {
      console.error("Erro ao creditar pontos:", error);
    }
  };

useEffect(() => {
  async function carregarDados() {
    try {
      const token = localStorage.getItem("@Opinai:token");

      const resUser = await api.get("/api/user/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const dadosUsuario = resUser.data;
      setUsuario(dadosUsuario);

      const resSurveys = await api.get("/api/surveys");
      const todasAsPesquisas = resSurveys.data;

      // 3. FILTRO: Se o ID da pesquisa estiver na lista de respondidas do usuário, ela não aparece
      const respondidasIds = dadosUsuario.pesquisasRespondidas || [];
      const disponiveis = todasAsPesquisas.filter(
        (survey) => !respondidasIds.includes(survey._id)
      );

      setPesquisasDisponiveis(disponiveis);
    } catch (error) {
      console.error("Erro ao carregar dados do banco:", error);
    } finally {
      setLoading(false);
    }
  }
  carregarDados();
}, []);

  return (
    <ContainerPesquisas>
      <HeaderB />

      <BannerAzul>
        <InfoUsuario>
          {/* Exibe a foto real do Base64 vinda do MongoDB ou uma padrão */}
          <img src={usuario.foto || "https://i.pravatar.cc/150"} alt="Perfil" />
          <div>
            <strong>{usuario.nome}</strong>
            <span>Usuário Nível {Math.floor(usuario.pontos / 5)}</span>
          </div>
        </InfoUsuario>
      </BannerAzul>

      <CardSaldo>
        <ContainerValores>
          <div className="pontos">{usuario.pontos} pontos</div>
          <div className="conversao">
            Saldo: <strong>{saldoDinheiro}</strong>
          </div>
        </ContainerValores>

        <BarraProgressoContainer>
          <BarraAtiva percentual={percentual} />
        </BarraProgressoContainer>

        <small
          style={{
            fontSize: "10px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <CheckCircle2 size={12} /> Progresso para saque: {usuario.pontos} /{" "}
          {metaPontos} pontos
        </small>

        <BotaoSacar disabled={!podeSacar} onClick={() => navigate("/saque")}>
          {podeSacar ? "Realizar Saque via PIX" : "Saldo Insuficiente"}
        </BotaoSacar>
      </CardSaldo>

      <BannerBonus>
        <Wallet size={20} color="#FF4D6D" />
        Pesquisas Disponíveis
      </BannerBonus>

      <ListaPesquisas>
        {loading ? (
          <p style={{ textAlign: "center", padding: "20px" }}>
            Buscando pesquisas...
          </p>
        ) : pesquisasDisponiveis.length === 0 ? (
          <div style={{ textAlign: "center", padding: "40px", color: "#999" }}>
            <p>Nenhuma pesquisa disponível.</p>
          </div>
        ) : (
          pesquisasDisponiveis.map((item) => (
            <CardPesquisa key={item._id}>
              <CodigoPesquisa>{item.nome}</CodigoPesquisa>
              <InfoRow>
                <div>
                  <Clock size={16} color="#00B4D8" /> {item.tempo}
                </div>
                <div>
                  <Calendar size={16} color="#00B4D8" /> Hoje
                </div>
                <div style={{ color: "#2D6A4F", fontWeight: "bold" }}>
                  <Banknote size={18} color="#2D6A4F" /> R$ {item.valor}
                </div>
              </InfoRow>

              <BotaoResponder
                onClick={() => navigate(`/responder/${item._id}`)}
              >
                Responder Agora
              </BotaoResponder>
            </CardPesquisa>
          ))
        )}
      </ListaPesquisas>
    </ContainerPesquisas>
  );
}
