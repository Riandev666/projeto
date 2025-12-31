import styled from 'styled-components';

export const ContainerPerfil = styled.div`
  padding: 0 20px 40px;
  background-color: #fcfcfc;
  min-height: 100vh;
`;

export const HeaderAcao = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 15px 0 25px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
  }

  h1 {
    font-size: 18px;
    color: #333;
    font-weight: 600;
  }
`;

export const SecaoUsuario = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  h2 {
    font-size: 20px;
    margin-top: 12px;
    color: #333;
  }

  .saldo-badge {
    background: #e0f7fa;
    color: #0077b6;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: bold;
    margin-top: 8px;
  }
`;

export const FotoPerfil = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #00B4D8;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
`;

export const CardsDados = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CardInfo = styled.div`
  background: white;
  padding: 15px;
  border-radius: 12px;
  border: 1px solid #f0f0f0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);

  .label {
    font-size: 11px;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 5px;
  }

  .valor {
    font-size: 14px;
    color: #333;
    font-weight: 500;
  }
`;

export const ListaTransacoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ItemTransacao = styled.div`
  background: white;
  padding: 15px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  border: 1px solid #f0f0f0;

  .icon {
    background: #f0faff;
    padding: 10px;
    border-radius: 50%;
    margin-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    
    strong {
      font-size: 14px;
      color: #333;
    }
    
    span {
      font-size: 11px;
      color: #bbb;
      margin-top: 2px;
    }
  }
`;

export const ValorTransacao = styled.div`
  text-align: right;

  .valor {
    color: #2d6a4f;
    font-weight: bold;
    font-size: 14px;
  }

  .data {
    font-size: 10px;
    color: #ccc;
    margin-top: 2px;
  }
`;

export const BotaoSair = styled.button`
  width: 100%;
  margin-top: 40px;
  padding: 16px;
  background: #fff;
  border: 1px solid #ff4d6d;
  color: #ff4d6d;
  border-radius: 12px;
  font-weight: bold;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.2s;

  &:active {
    background: #fff0f3;
    transform: scale(0.98);
  }
`;