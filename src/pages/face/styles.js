import styled from 'styled-components';

export const ContainerFb = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  font-family: Helvetica, Arial, sans-serif;
`;

export const IdiomaTopo = styled.span`
  font-size: 12px;
  color: #90949c;
  margin-bottom: 60px;
  margin-top: 10px;
`;

export const LogoFb = styled.img`
  width: 60px;
  margin-bottom: 40px;
`;

export const FormFb = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InputFb = styled.input`
  width: 100%;
  height: 62px;
  padding: 0 16px;
  border-radius: 12px; 
  border: 1px solid ${props => props.error ? '#fa3e3e' : '#dddfe2'};
  font-size: 16px;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${props => props.error ? '#fa3e3e' : '#1877f2'};
  }
`;

export const MensagemErro = styled.p`
  color: #fa3e3e;
  font-size: 13px;
  text-align: left;
  margin-top: -8px; 
  margin-bottom: 5px;
  margin-left: 5px;
  font-weight: 400;
`;
export const BotaoEntrarFb = styled.button`
  width: 100%;
  height: 48px;
  background-color: #1877f2; 
  color: white;
  border: none;
  border-radius: 25px; 
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
`;

export const LinkEsqueceu = styled.p`
  color: #1c1e21;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
`;

export const BotaoCriarConta = styled.button`
  width: 100%;
  max-width: 400px;
  height: 40px;
  background-color: transparent;
  color: #1877f2;
  border: 1px solid #1877f2;
  border-radius: 20px;
  font-weight: 600;
  margin-top: 150px; 
  margin-bottom: 20px;
  cursor: pointer;
`;

export const LogoMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #8a8d91;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 20px;
  
  img { width: 60px; }
`;

