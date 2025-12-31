import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Cabecalho,
  Logotipo,
  IconeMenu,
  MenuLateral,
  CabecalhoMenu,
  BotaoFechar,
  ListaNavegacao,
  LinkNavegacao,
  BotaoMinhaConta,
} from "./styles";

export default function Header() {
  const [estaAberto, setEstaAberto] = useState(false);
  const navigate = useNavigate();

  const irPara = (rota) => {
    navigate(rota);
    setEstaAberto(false);
  };

  return (
    <>
      <Cabecalho>
        <Logotipo onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          Opin<span>aí</span>
        </Logotipo>
        <IconeMenu onClick={() => setEstaAberto(true)}>
          <div />
          <div />
          <div />
        </IconeMenu>
      </Cabecalho>

      <MenuLateral aberto={estaAberto}>
        <CabecalhoMenu>
          <Logotipo
            onClick={() => irPara("/")}
            style={{ fontSize: "22px", cursor: "pointer" }}
          >
            Opin<span>aí</span>
          </Logotipo>
          <BotaoFechar onClick={() => setEstaAberto(false)}>
            &times;
          </BotaoFechar>
        </CabecalhoMenu>

        <ListaNavegacao>
          <LinkNavegacao destaque onClick={() => irPara("/")}>
            Home
          </LinkNavegacao>

          <LinkNavegacao
            href="#como-funciona"
            onClick={() => setEstaAberto(false)}
          >
            Como Funciona
          </LinkNavegacao>

          <LinkNavegacao onClick={() => irPara("/cadastro")}>
            Cadastre-se
          </LinkNavegacao>

          <LinkNavegacao href="#sobre" onClick={() => setEstaAberto(false)}>
            Sobre
          </LinkNavegacao>

          <BotaoMinhaConta onClick={() => irPara("/login")}>
            Entrar
          </BotaoMinhaConta>
        </ListaNavegacao>
      </MenuLateral>
    </>
  );
}
