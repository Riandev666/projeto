import styled from 'styled-components';

export const SecaoRecompensas = styled.section`
  padding: 60px 20px;
  background-color: white;
  text-align: center;
`;

export const TituloRecompensas = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #111;
  margin-bottom: 10px;
  line-height: 1.2;
`;

export const SubtituloRecompensas = styled.p`
  font-size: 16px;
  color: #888;
  max-width: 300px;
  margin: 0 auto 40px;
  line-height: 1.5;
`;

export const GridCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 30px;
`;

export const CardRecompensa = styled.div`
  border: 1px solid #eee;
  border-radius: 20px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  background: #fff;
`;

export const ContainerImagem = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;

  img {
    max-width: 100%;
    border-radius: 12px;
    object-fit: contain;
  }
`;

export const DivisorCard = styled.div`
  width: 100%;
  height: 4px;
  background-color: #eee;
  border-radius: 2px;
  margin-bottom: 10px;
`;

export const NomeEmpresa = styled.span`
  font-size: 13px;
  color: #888;
  margin-bottom: 5px;
`;

export const ValorRecompensa = styled.strong`
  font-size: 18px;
  color: #111;
  font-weight: 800;
`;

export const BotaoVerMais = styled.button`
  background: none;
  border: none;
  color: #111;
  font-size: 18px;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px auto 0;
  cursor: pointer;

  span {
    color: #5367B0;
    font-size: 20px;
  }
`;