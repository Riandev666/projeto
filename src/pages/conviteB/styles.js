import styled from 'styled-components';

export const ContainerConvite = styled.div`
  padding: 0 20px 40px;
  background-color: #fff;
  min-height: 100vh;

  .btn-whatsapp {
    width: 100%;
    margin-top: 30px;
    padding: 15px;
    background: #25D366;
    color: white;
    border: none;
    border-radius: 12px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
  }
`;

export const HeaderAcao = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 15px 0 25px;
  button { background: none; border: none; }
  h1 { font-size: 18px; color: #333; }
`;

export const CardDestaque = styled.div`
  background: #0077B6;
  padding: 30px 20px;
  border-radius: 20px;
  color: white;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 119, 182, 0.2);

  h2 { font-size: 22px; margin: 15px 0 10px; }
  p { font-size: 14px; opacity: 0.9; line-height: 1.4; }
`;

export const PassosIndica = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Passo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  .num {
    background: #00B4D8;
    color: white;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 14px;
    flex-shrink: 0;
  }
  p { font-size: 14px; color: #555; }
`;

export const InputLink = styled.div`
  display: flex;
  margin-top: 8px;
  background: #f1f3f4;
  padding: 8px;
  border-radius: 12px;
  border: 1px dashed #00B4D8;

  input {
    flex: 1;
    background: none;
    border: none;
    padding: 10px;
    font-size: 13px;
    color: #666;
    outline: none;
  }
`;

export const BotaoCopiar = styled.button`
  background: ${props => props.copiado ? '#2D6A4F' : '#00B4D8'};
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
`;

export const StatusConvites = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 30px;

  .stat {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 12px;
    text-align: center;
    border: 1px solid #eee;

    strong { display: block; font-size: 18px; color: #333; }
    span { font-size: 11px; color: #999; }
  }
`;