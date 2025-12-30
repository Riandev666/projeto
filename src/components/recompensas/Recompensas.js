import React from "react";
import {
  SecaoRecompensas, TituloRecompensas, SubtituloRecompensas, GridCards,
  CardRecompensa, ContainerImagem, DivisorCard, NomeEmpresa,
  ValorRecompensa, BotaoVerMais
} from "./styles";

import LogoPaypal from "../../assets/paypal.jpg";
import LogoNubank from "../../assets/nubank.jpg";
import LogoVisa from "../../assets/visa.jpg";
import LogoCaixa from "../../assets/caixa.png";
import LogoPicPay from "../../assets/PicPay.png";
import LogoBradesco from "../../assets/bradesco.jpg";

export default function Recompensas() {
  const listaRecompensas = [
    { id: 1, logo: LogoPaypal, empresa: "PayPal International", valor: "$3 - $200" },
    { id: 2, logo: LogoNubank, empresa: "Nubank", valor: "$3 - $200" },
    { id: 3, logo: LogoVisa, empresa: "Virtual Visa", valor: "$3 - $200" },
    { id: 4, logo: LogoCaixa, empresa: "Caixa econômica", valor: "$5 - $500" },
    { id: 5, logo: LogoPicPay, empresa: "PicaPay", valor: "R$50 - R$500" },
    { id: 6, logo: LogoBradesco, empresa: "Bradesco", valor: "R$20 - R$200" },
  ];

  return (
    <SecaoRecompensas>
      <TituloRecompensas>Já tem pontos? Resgate sua recompensa.</TituloRecompensas>
      <SubtituloRecompensas>
        Firmamos parcerias com as maiores marcas para oferecer as melhores recompensas para você.
      </SubtituloRecompensas>

      <GridCards>
        {listaRecompensas.map((item) => (
          <CardRecompensa key={item.id}>
            <ContainerImagem>
              <img src={item.logo} alt={item.empresa} />
            </ContainerImagem>
            <DivisorCard />
            <NomeEmpresa>{item.empresa}</NomeEmpresa>
            <ValorRecompensa>{item.valor}</ValorRecompensa>
          </CardRecompensa>
        ))}
      </GridCards>

      <BotaoVerMais>
        Ver Mais Recompensas <span>→</span>
      </BotaoVerMais>
    </SecaoRecompensas>
  );
}