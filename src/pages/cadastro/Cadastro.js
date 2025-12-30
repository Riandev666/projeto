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

export default function Cadastro() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <ContainerLogin>
        <CardCadastro>
          <TituloCadastro>Cadastro</TituloCadastro>
          <Subtitulo>Escolha com o que vai se cadastrar</Subtitulo>

          <BotaoSocial onClick={() => navigate("/face")} className="facebook">
            <img src={icons.facebook} alt="Facebook" />
            Cadastrar com o Facebook
          </BotaoSocial>

          <BotaoSocial onClick={() => navigate("/insta")} className="instagram">
            <img src={icons.instagram} alt="Instagram" />
            Cadastrar com o Instagram
          </BotaoSocial>

          <BotaoSocial onClick={() => navigate("/google")} className="google">
            <img src={icons.google} alt="Google" />
            Cadastrar com o Google
          </BotaoSocial>

          <LinkLogin onClick={() => navigate("/login")}>
            Já possui cadastro? <span>Entrar</span>
          </LinkLogin>
        </CardCadastro>
      </ContainerLogin>
    </>
  );
}
