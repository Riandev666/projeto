import styled from 'styled-components';

export const SecaoDestaque = styled.section`
  background: linear-gradient(135deg, #0077B6 0%, #00B4D8 100%);
  padding: 40px 20px 0 20px; 
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  overflow: hidden;
  min-height: 616px;
`;

export const TituloPrincipal = styled.h2`
  font-size: 34px;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 15px;
  text-transform: uppercase;
  position: relative;
  z-index: 2; 
`;

export const DescricaoDestaque = styled.p`
  font-size: 16px;
  margin-bottom: 25px;
  max-width: 70%;
  position: relative;
  z-index: 2;
`;

export const Bonus = styled.div`
background-color: #5367B0;
width: 220px;
font-size: 10px;
margin-bottom: 10px;
border-radius: 20px;
padding: 8px 12px;
`

export const BotaoGanhar = styled.button`
  background-color: #FFC107;
  color: #fff;
  border: none;
  height: 50px;
  width: 200px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  z-index: 2;
`;

export const FotoUsuario = styled.img`
  width: 277px; 
  position: absolute;
  bottom: 0;
  right: -20px; 
  z-index: 1; 
`;