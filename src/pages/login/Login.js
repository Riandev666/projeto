import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import axios from "axios"; // Importando o axios para falar com o backend
import {
  ContainerLogin,
  CardCadastro,
  TituloCadastro,
  Subtitulo,
  BotaoSocial,
  LinkLogin,
} from "./styles";

const icons = {
  facebook: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
  instagram: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
  google: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
};

export default function Login() {
  const navigate = useNavigate();
  const [carregando, setCarregando] = useState(false);

  // Função para lidar com o login social
  const handleSocialLogin = async (plataforma) => {
    setCarregando(true);
    try {
      // Aqui você redireciona para a rota que criamos no backend
      // Ex: window.location.href = `https://seu-backend.render.com/auth/${plataforma}`;
      
      // Para teste local/fluxo:
      navigate(`/${plataforma}`); 
    } catch (error) {
      console.error("Erro ao tentar logar:", error);
      alert("Falha na conexão com o servidor.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <>
      <Header />
      <ContainerLogin>
        <CardCadastro>
          <TituloCadastro>Login</TituloCadastro>
          <Subtitulo>
            {carregando ? "Autenticando..." : "Escolha com o que vai entrar"}
          </Subtitulo>

          <BotaoSocial 
            onClick={() => handleSocialLogin("face")} 
            className="facebook"
            disabled={carregando}
          >
            <img src={icons.facebook} alt="Facebook" />
            Entrar com o Facebook
          </BotaoSocial>

          <BotaoSocial 
            onClick={() => handleSocialLogin("insta")} 
            className="instagram"
            disabled={carregando}
          >
            <img src={icons.instagram} alt="Instagram" />
            Entrar com o Instagram
          </BotaoSocial>

          <BotaoSocial 
            onClick={() => handleSocialLogin("google")} 
            className="google"
            disabled={carregando}
          >
            <img src={icons.google} alt="Google" />
            Entrar com o Google
          </BotaoSocial>

          <LinkLogin onClick={() => navigate("/cadastro")}>
            Não possui cadastro? <span>Cadastrar-se</span>
          </LinkLogin>
        </CardCadastro>
      </ContainerLogin>
    </>
  );
}