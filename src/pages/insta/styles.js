import styled from 'styled-components';

export const ContainerInsta = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(180deg, #ffffff 0%, #f0f2f5 100%);
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`;

export const IdiomaTopo = styled.span`
  font-size: 15px;
  color: #90949c;
  margin-bottom: 60px;
  margin-top: 10px;
`;

export const LogoInsta = styled.img`
  width: 60px;
  margin-bottom: 100px;
`;

export const FormInsta = styled.div`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputInsta = styled.input`
  width: 100%;
  height: 60px;
  padding: 0 12px;
  border-radius: 7px; 
  border: 1px solid ${props => props.error ? '#ed4956' : '#dbdbdb'};
  background-color: #fafafa;
  font-size: 16px;
  transition: border-color 0.2s;

  &::placeholder {
    color: #8e8e8e;
  }

  &:focus {
    outline: none;
    border-color: ${props => props.error ? '#ed4956' : '#a8a8a8'};
  }
`;

export const MensagemErroInsta = styled.p`
  color: #ed4956;
  font-size: 12px;
  text-align: left;
  margin-top: -4px;
  margin-bottom: 4px;
  margin-left: 4px;
`;

export const BotaoLoginInsta = styled.button`
  width: 100%;
  height: 45px;
  background-color: #0095f6; 
  color: white;
  border: none;
  border-radius: 18px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;

  &:active {
    opacity: 0.7;
  }
`;

export const LinkEsqueceuInsta = styled.p`
  color: #385185;
  font-size: 15px;
  text-align: center;
  margin-top: 15px;
  cursor: pointer;
`;

export const RodapeMeta = styled.footer`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  width: 100%;
`;

export const BotaoNovoInsta = styled.button`
  width: 100%;
  max-width: 350px;
  height: 45px;
  background-color: transparent;
  color: #0095f6;
  border: 1px solid #0095f6;
  border-radius: 18px;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const LogoMetaBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #8e8e8e;
  font-size: 12px;
  
  img { 
    width: 60px;
    opacity: 0.6;
  }
`;