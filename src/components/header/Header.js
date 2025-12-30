import React, { useState } from "react";
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

  return (
    <>
      <Cabecalho>
        <Logotipo>
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
          <Logotipo style={{ fontSize: "22px" }}>
            Opin<span>aí</span>
          </Logotipo>
          <BotaoFechar onClick={() => setEstaAberto(false)}>
            &times;
          </BotaoFechar>
        </CabecalhoMenu>

        <ListaNavegacao>
          <LinkNavegacao destaque href="#">
            Home
          </LinkNavegacao>
          <LinkNavegacao href="#">Como Funciona</LinkNavegacao>
          <LinkNavegacao href="#">Cadastre-se</LinkNavegacao>
          <LinkNavegacao href="#">Sobre</LinkNavegacao>

          <BotaoMinhaConta>
            Minha Conta <span>▼</span>
          </BotaoMinhaConta>
        </ListaNavegacao>
      </MenuLateral>
    </>
  );
}
