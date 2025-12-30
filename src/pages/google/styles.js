import styled from 'styled-components';

export const ContainerGoogle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  min-height: 100vh;
  font-family: 'Roboto', arial, sans-serif;
`;

export const CardGoogle = styled.div`
  width: 100%;
  max-width: -100px;
  border: 1px solid #dadce0;
  border-radius: 8px;
  margin-top: -300px;

  @media (max-width: 450px) {
    border: none;
  }
`;

export const LogoGoogle = styled.img`
  width: 75px;
  margin-bottom: 10px;
`;

export const TituloGoogle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  color: #202124;
  margin-bottom: 8px;
`;

export const SubtituloGoogle = styled.p`
  font-size: 15px;
  color: #202124;
  margin-bottom: 40px;
`;

export const FormGoogle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
`;

export const InputGoogle = styled.input`
  width: 100%;
  height: 56px;
  padding: 13px 15px;
  border-radius: 4px;
  border: 1px solid ${props => props.error ? '#d93025' : '#dadce0'};
  font-size: 16px;
  color: #202124;
  outline: none;
  transition: border 0.2s;

  &:focus {
    border: 2px solid ${props => props.error ? '#d93025' : '#1a73e8'};
    padding: 12px 14px;
  }
`;

export const MensagemErroGoogle = styled.div`
  display: flex;
  align-items: center;
  color: #d93025;
  font-size: 12px;
  margin-top: 4px;
  gap: 8px;
  
  svg {
    fill: #d93025;
    width: 16px;
  }
`;

export const LinkEsqueceu = styled.span`
  color: #1a73e8;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  margin-top: 5px;
  display: inline-block;
`;

export const FooterBotoes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

export const BotaoCriar = styled.button`
  background: none;
  border: none;
  color: #1a73e8;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  padding: 10px 0;
`;

export const BotaoProximo = styled.button`
  background-color: #1a73e8;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 24px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #1b66c9;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15);
  }
`;