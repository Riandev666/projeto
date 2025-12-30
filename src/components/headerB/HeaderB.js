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
            Pesquisas Disponíveis
          </LinkNavegacao>
          <LinkNavegacao href="#">Extrato</LinkNavegacao>
          <LinkNavegacao href="#">Informações Cadastrais</LinkNavegacao>
          <LinkNavegacao href="#">Indique um amigo</LinkNavegacao>
          <LinkNavegacao href="#">Portal de recompensas</LinkNavegacao>
          <BotaoMinhaConta>
            Sair <span>▼</span>
          </BotaoMinhaConta>
        </ListaNavegacao>
      </MenuLateral>
    </>
  );
}
