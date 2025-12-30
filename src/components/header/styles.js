import styled from 'styled-components';

export const Cabecalho = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #fff; 
  width: 100%;
  box-sizing: border-box;
`;

export const Logotipo = styled.h1`
  font-size: 28px;
  font-weight: 800;
  margin: 0;
  color: #000; 

  span {
    color: #00B4D8; 
  }
`;

export const IconeMenu = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;

  div {
    width: 25px;
    height: 3px;
    background-color: #333; 
    border-radius: 2px;
  }
`;

export const MenuLateral = styled.div`
  position: fixed;
  top: 0;
  right: ${props => (props.aberto ? '0' : '-100%')};
  width: 90%;
  height: 100vh;
  background-color: #fff;
  z-index: 100;
  transition: right 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
`;

export const CabecalhoMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  img {
    width: 60px; 
  }
`;

export const BotaoFechar = styled.button`
  background: none;
  border: none;
  font-size: 32px;
  color: #888;
  cursor: pointer;
`;

export const ListaNavegacao = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex-grow: 1;
`;

export const LinkNavegacao = styled.a`
  text-decoration: none;
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase; 
  color: ${props => (props.destaque ? '#00B4D8' : '#000')}; 
`;

export const BotaoMinhaConta = styled.button`
  background-color: #22C1D3; 
  color: #fff;
  border: none;
  padding: 12px 0;
  width: 280px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 10px rgba(34, 193, 211, 0.3);
  margin-top: 10px;

  span {
    font-size: 12px;
  }
`;

export const ContainerRedesSociais = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;

  img {
    width: 32px; 
    height: 32px;
  }
`;