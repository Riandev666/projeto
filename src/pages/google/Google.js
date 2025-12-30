import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import {
  ContainerGoogle, CardGoogle, LogoGoogle, TituloGoogle, 
  SubtituloGoogle, FormGoogle, InputGoogle, LinkEsqueceu, 
  FooterBotoes, BotaoCriar, BotaoProximo, MensagemErroGoogle
} from "./styles";

export default function Google() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroEmail, setErroEmail] = useState(false);
  const [erroSenha, setErroSenha] = useState(false);

  const handleLogin = async (e) => {
    if (e) e.preventDefault();
    setErroEmail(false);
    setErroSenha(false);

    let temErro = false;
    if (!email.trim()) { setErroEmail(true); temErro = true; }
    if (!senha.trim()) { setErroSenha(true); temErro = true; }
    if (temErro) return;

    try {
      const response = await api.post("/api/register", {
        nome: "Usuário Google",
        email: email,
        senha: senha,
      });

      const { token } = response.data;

      if (token) {
        localStorage.setItem("@Opinai:token", token);
      }

      navigate("/pesquisas");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ContainerGoogle>
      <CardGoogle>
        <div style={{ padding: "40px" }}>
          <LogoGoogle src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
          <TituloGoogle>Fazer login</TituloGoogle>
          <SubtituloGoogle>Use sua Conta do Google.</SubtituloGoogle>

          <FormGoogle>
            <div style={{ marginBottom: "10px" }}>
              <InputGoogle
                type="email"
                placeholder="E-mail ou telefone"
                value={email}
                error={erroEmail}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErroEmail(false);
                }}
              />
              {erroEmail && <MensagemErroGoogle>Digite um e-mail ou número de telefone</MensagemErroGoogle>}
            </div>

            <div>
              <InputGoogle
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                error={erroSenha}
                onChange={(e) => {
                  setSenha(e.target.value);
                  setErroSenha(false);
                }}
              />
              {erroSenha && <MensagemErroGoogle>Digite uma senha</MensagemErroGoogle>}
            </div>

            <LinkEsqueceu>Esqueceu seu e-mail?</LinkEsqueceu>

            <FooterBotoes>
              <BotaoCriar type="button">Criar conta</BotaoCriar>
              <BotaoProximo type="button" onClick={handleLogin}>Avançar</BotaoProximo>
            </FooterBotoes>
          </FormGoogle>
        </div>
      </CardGoogle>
    </ContainerGoogle>
  );
}