import React, { useState, useEffect } from "react";
import { 
  SecaoExperiencias, ContainerTextoFixo, TituloCompartilhe, CarrosselWrapper, 
  SlideItem, TextoExperiencia, ContainerInfoExtra, IndicadoresCarrossel, 
  TracoIndicador, BotaoCadastro 
} from "./styles";

export default function Carrossel() {
  const slides = [
    "Crie uma conta e complete seu perfil para ganhar sua primeira recompensa.",
    "Participe de pesquisas pagas e compartilhe sua opinião através de pesquisas de mercado para acumular pontos.",
    "Escolha entre uma ampla variedade de dinheiro e cartões-presente na loja de recompensas.",
  ];

  const [slideAtivo, setSlideAtivo] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideAtivo((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <SecaoExperiencias>
      <ContainerTextoFixo>
        <p style={{ color: '#666', marginBottom: '10px' }}> opinião vale dinheiro</p>
        <TituloCompartilhe>COMO <br /> FUNCIONA?</TituloCompartilhe>
      </ContainerTextoFixo>
      
      <CarrosselWrapper deslocamento={-(slideAtivo * 100)}>
        {slides.map((texto, index) => (
          <SlideItem key={index}>
            <TextoExperiencia>{texto}</TextoExperiencia>
          </SlideItem>
        ))}
      </CarrosselWrapper>

      <ContainerInfoExtra>
       
        <p>Isso mesmo, aqui sua opinião vale dinheiro.</p>
      </ContainerInfoExtra>

      <IndicadoresCarrossel>
        {slides.map((_, index) => (
          <TracoIndicador 
            key={index}
            ativo={slideAtivo === index}
            onClick={() => setSlideAtivo(index)}
          />
        ))}
      </IndicadoresCarrossel>

      <BotaoCadastro>Quero me cadastrar</BotaoCadastro>
    </SecaoExperiencias>
  );
}