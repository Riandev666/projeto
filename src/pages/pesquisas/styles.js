import styled from 'styled-components';

export const ContainerPesquisas = styled.main`
  background-color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const BannerAzul = styled.div`
  background: linear-gradient(135deg, #0077B6 0%, #00B4D8 100%);
  padding: 30px 20px;
  color: white;
  text-align: left;

  h2 { font-size: 24px; font-weight: 800; margin-bottom: 5px; }
  h1 { font-size: 32px; font-weight: 900; text-transform: uppercase; }
`;

export const CardSaldo = styled.div`
  background: linear-gradient(135deg, #0077B6 0%, #00B4D8 100%); 
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 0px 10px 20px rgba(83, 103, 176, 0.3); 
`;

export const InfoUsuario = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  img { width: 50px; height: 50px; border-radius: 50%; border: 2px solid #fff; object-fit: cover; }
  div { display: flex; flex-direction: column; strong { font-size: 18px; } span { font-size: 12px; opacity: 0.8; } }
`;

export const ContainerValores = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  .pontos { font-size: 24px; font-weight: 900; }
  .conversao { font-size: 14px; opacity: 0.9; }
`;

export const BarraProgressoContainer = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  overflow: hidden;
`;

export const BarraAtiva = styled.div`
  width: ${props => props.percentual}%;
  height: 100%;
  background: #FFB703;
  transition: width 0.5s ease;
`;

export const BotaoSacar = styled.button`
  width: 100%;
  height: 45px;
  border-radius: 8px;
  border: none;
  font-weight: 900;
  text-transform: uppercase;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  background-color: ${props => props.disabled ? '#ccc' : '#FFB703'};
  color: ${props => props.disabled ? '#777' : '#fff'};
`;

export const BannerBonus = styled.div`
  background-color: #FFF0F3;
  border-radius: 12px;
  margin: 0 20px 20px;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #FF4D6D;
  font-weight: bold;
  font-size: 13px;
  img { width: 24px; }
`;

export const ListaPesquisas = styled.section`
  padding: 0 20px;
`;

export const CardPesquisa = styled.div`
  border-bottom: 1px solid #eee;
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const CodigoPesquisa = styled.span`
  color: #00B4D8;
  font-weight: bold;
  font-size: 18px;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: #666;
  font-size: 14px;
  
  div {
    display: flex;
    align-items: center;
    gap: 6px; 
  }
`;

export const BotaoResponder = styled.button`
  background-color: #5367B0;
  color: white;
  border: none;
  border-radius: 6px;
  height: 45px;
  width: 160px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
`;