import styled from 'styled-components';

export const ContainerPesquisaAtiva = styled.main`
  background: #f4f9fc; /* Fundo levemente azulado para harmonia */
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

export const HeaderTop = styled.div`
  width: 100%;
  background: #00B4D8; /* Azul claro/Ciano do seu site */
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 10px rgba(0, 180, 216, 0.15);
  margin-bottom: 20px;

  span {
    font-weight: 700;
    color: white;
    font-size: 14px;
    text-transform: uppercase;
  }
`;

export const CardForms = styled.div`
  background: white;
  width: 90%;
  max-width: 450px;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 180, 216, 0.08);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  border: 1px solid #e2eff5;

  /* Detalhe estético lateral em azul claro */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 6px;
    background: #00B4D8;
  }
`;

export const PerguntaTexto = styled.h2`
  font-size: 20px;
  color: #1e293b;
  line-height: 1.5;
  margin-bottom: 25px;
  font-weight: 700;
`;

export const InputRespostaForms = styled.textarea`
  width: 100%;
  border: 2px solid #e2eff5;
  border-radius: 12px;
  padding: 15px;
  font-size: 16px;
  min-height: 100px;
  background: #fcfdfe;
  resize: none;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00B4D8;
    background: white;
    box-shadow: 0 0 0 4px rgba(0, 180, 216, 0.1);
  }
`;

export const BotaoProximo = styled.button`
  background: #00B4D8;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 16px;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 25px;
  cursor: pointer;
  transition: all 0.2s;

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    background: #cbd5e0;
    cursor: not-allowed;
  }
`;

export const ContainerSucesso = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 15px;

  h2 { color: #1e293b; }
  .valor { 
    color: #2D6A4F; 
    font-size: 28px; 
    font-weight: 900;
  }
`;