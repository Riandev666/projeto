import styled from 'styled-components';

export const SecaoExperiencias = styled.section`
  padding: 40px 0; 
  background-color: #fff;
  overflow: hidden;
`;

export const ContainerTextoFixo = styled.div`
  padding: 0 20px;
`;

export const TituloCompartilhe = styled.h2`
  color: #00B4D8;
  font-size: 32px;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1.1;
  margin-bottom: 20px;
`;

export const CarrosselWrapper = styled.div`
  display: flex;
  transform: translateX(${props => props.deslocamento}%);
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
`;

export const SlideItem = styled.div`
  min-width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const TextoExperiencia = styled.p`
  color: #666;
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 30px;
  min-height: 80px;
`;

export const ContainerInfoExtra = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 0 20px 20px 20px;
  img { width: 50px; }
  p { color: #00B4D8; font-weight: bold; font-size: 18px; }
`;

export const IndicadoresCarrossel = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 20px 0 30px 0;
`;

export const TracoIndicador = styled.button`
  width: 35px;
  height: 4px;
  border: none;
  background-color: ${props => props.ativo ? '#00B4D8' : '#eee'};
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const BotaoCadastro = styled.button`
  background-color: #5367B0;
  color: #fff;
  border: none;
  padding: 18px;
  border-radius: 8px;
  font-weight: bold;
  text-transform: uppercase;
  width: calc(100% - 40px);
  margin: 0 20px;
  cursor: pointer;
`;