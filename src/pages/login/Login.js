import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
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

  return (
    <>
      <Header />
      <ContainerLogin>
        <CardCadastro>
          <TituloCadastro>Login</TituloCadastro>
          <Subtitulo>Escolha com o que vai entrar</Subtitulo>

          <BotaoSocial onClick={() => navigate("/face")} className="facebook">
            <img src={icons.facebook} alt="Facebook" />
            Entrar com o Facebook
          </BotaoSocial>

          <BotaoSocial onClick={() => navigate("/insta")} className="instagram">
            <img src={icons.instagram} alt="Instagram" />
            Entrar com o Instagram
          </BotaoSocial>

          <BotaoSocial onClick={() => navigate("/google")} className="google">
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
