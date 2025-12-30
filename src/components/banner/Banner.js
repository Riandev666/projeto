import React from "react";
import { useNavigate } from 'react-router-dom';
import BannerImg from "../../assets/banner.svg";
import {
  SecaoDestaque,
  TituloPrincipal,
  DescricaoDestaque,
  Bonus,
  BotaoGanhar,
  FotoUsuario,
} from "./styles";

export default function Banner() {
  const navigate = useNavigate();

  return (
    <SecaoDestaque>
      <TituloPrincipal>
        SUA OPINIÃO <br /> MUDA O MUNDO
      </TituloPrincipal>
      <DescricaoDestaque>
        Ganhe dinheiro e cartões-presente grátis ao fazer pesquisas
      </DescricaoDestaque>
      {/* <Bonus>Inscreva-se agora e resgate seu R$5.57 BÔNUS GRÁTIS</Bonus> */}
      <BotaoGanhar onClick={() => navigate('/cadastro')}>Comece a ganhar</BotaoGanhar>
      <FotoUsuario src={BannerImg} alt="Usuário feliz com laptop" />
    </SecaoDestaque>
  );
}
