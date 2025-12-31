import React from "react";
import { useNavigate } from "react-router-dom"; // 1. Importe o useNavigate
import {
  SecaoRecompensas, TituloRecompensas, SubtituloRecompensas, GridCards,
  CardRecompensa, ContainerImagem, DivisorCard, NomeEmpresa,
  ValorRecompensa, BotaoVerMais
} from "./styles";

// Seus imports de imagens permanecem iguais...
import LogoPaypal from "../../assets/paypal.jpg";
import LogoNubank from "../../assets/nubank.jpg";
import LogoVisa from "../../assets/visa.jpg";
import LogoCaixa from "../../assets/caixa.png";
import LogoPicPay from "../../assets/PicPay.png";
import LogoBradesco from "../../assets/bradesco.jpg";

export default function Recompensas() {
  const navigate = useNavigate(); // 2. Inicialize o navigate

  const listaRecompensas = [
    { id: 1, logo: LogoPaypal, empresa: "PayPal International", valor: "$3 - $200" },
    { id: 2, logo: LogoNubank, empresa: "Nubank", valor: "$3 - $200" },
    { id: 3, logo: LogoVisa, empresa: "Virtual Visa", valor: "$3 - $200" },
    { id: 4, logo: LogoCaixa, empresa: "Caixa econômica", valor: "$5 - $500" },
    { id: 5, logo: LogoPicPay, empresa: "PicPay", valor: "R$50 - R$500" },
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
          /* 3. Adicione o onClick e cursor: pointer no card */
          <CardRecompensa 
            key={item.id} 
            onClick={() => navigate("/cadastro")}
            style={{ cursor: 'pointer' }}
          >
            <ContainerImagem>
              <img src={item.logo} alt={item.empresa} />
            </ContainerImagem>
            <DivisorCard />
            <NomeEmpresa>{item.empresa}</NomeEmpresa>
            <ValorRecompensa>{item.valor}</ValorRecompensa>
          </CardRecompensa>
        ))}
      </GridCards>

      {/* Também adicionei ao botão "Ver Mais" para consistência */}
      <BotaoVerMais onClick={() => navigate("/cadastro")}>
        Ver Mais Recompensas <span>→</span>
      </BotaoVerMais>
    </SecaoRecompensas>
  );
}