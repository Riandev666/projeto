import React, { useState } from "react";
import {
  SecaoPadrao,
  TituloSecao,
  ItemDuvidaContainer,
  PerguntaDuvida,
  RespostaDuvida
} from "./styles";

export default function Duvidas() {
  const [abertoIndex, setAbertoIndex] = useState(null);

  const listaFaq = [
    {
      pergunta: "Como faço para me cadastrar?",
      resposta: "Para se cadastrar, basta clicar no botão 'Quero me cadastrar' e a  partir daí algumas informações básicas serão solicitadas para completar o seu cadastro, não se preocupe, são pouquíssimas informações."
    },
    {
      pergunta: "Como participar de pesquisas?",
      resposta: "Se uma pesquisa se adequar ao seu perfil você será avisado por e-mail e/ou WhatsApp. Você também pode consultar as pesquisas disponíveis no seu acesso no site do Opinaí. Quanto mais atualizados estiverem as suas informações de perfil mais convites você irá receber e mais dinheiro vai ganhar"},
    {
      pergunta: "Como indicar um amigo?",
      resposta: "Você pode usar seu link de indicação exclusivo no perfil para convidar amigos e ganhar bônus. Acesse o site do Opinaí e clique em 'Entrar' localizado no canto superior direito; clique no botão Indicar um amigo. Indicação por whatsapp: basta clicar no botão 'Compartilhar no Whatsapp' que automaticamente você será direcionado para a ferramenta. Vale destacar que o seu código é exclusivo e pode ser utilizado em outros canais de divulgação. Basta copiar e colar, deixando clicável."
    },
    {
      pergunta: "Como cancelar minha conta?",
      resposta: "O cancelamento pode ser feito a qualquer momento nas configurações do seu perfil. Mas atenção: o saldo na sua carteira de remuneração será excluído definitivamente sem a possibilidade de resgate."
    },
    {
      pergunta: "Como faço para resgatar o meu dinheiro?",
      resposta: "Assim que atingir o valor mínimo, você pode solicitar o resgate. Opinaí é a única comunidade que paga em dinheiro. Para solicitar o resgate é necessário somar pelo menos R$ 20,00. Se você já tiver este valor no seu extrato e quiser prosseguir, basta clicar no botão 'resgatar agora'. INFORMAÇÃO IMPORTANTE: o meio de pagamento é PIX, mas note que há um processo interno a ser seguido e o dinheiro não cai imediatamente."
    }
  ];

  const toggleDuvida = (index) => {
    setAbertoIndex(abertoIndex === index ? null : index);
  };

  return (
    <SecaoPadrao>
      <TituloSecao>DÚVIDAS FREQUENTES</TituloSecao>
      
      {listaFaq.map((item, index) => (
        <ItemDuvidaContainer key={index} onClick={() => toggleDuvida(index)}>
          <PerguntaDuvida aberto={abertoIndex === index}>
            {item.pergunta} <span>⌵</span>
          </PerguntaDuvida>
          
          <RespostaDuvida aberto={abertoIndex === index}>
            {item.resposta}
          </RespostaDuvida>
        </ItemDuvidaContainer>
      ))}
    </SecaoPadrao>
  );
}