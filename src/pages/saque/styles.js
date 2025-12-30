import styled from 'styled-components';

export const ContainerSacar = styled.main`
  background: #f4f9fc;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

export const CardSaldo = styled.div`
  background: linear-gradient(135deg, #00B4D8 0%, #0077B6 100%);
  width: 90%;
  max-width: 450px;
  border-radius: 20px;
  padding: 25px;
  color: white;
  margin-top: 20px;
  box-shadow: 0 10px 20px rgba(0, 180, 216, 0.2);
  display: flex;
  flex-direction: column;
  gap: 10px;

  span { font-size: 14px; opacity: 0.9; }
  h2 { font-size: 32px; font-weight: 800; }
`;

export const FormSacar = styled.div`
  background: white;
  width: 90%;
  max-width: 450px;
  border-radius: 20px;
  padding: 25px;
  margin-top: 20px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MetodoPagamento = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  border: 2px solid ${props => props.selecionado ? '#00B4D8' : '#e2eff5'};
  background: ${props => props.selecionado ? '#f0fbff' : 'white'};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;

  span { font-weight: 600; color: #1e293b; }
`;

export const InputPix = styled.input`
  width: 100%;
  padding: 15px;
  border-radius: 12px;
  border: 2px solid #e2eff5;
  font-size: 16px;
  margin-top: 10px;
  outline: none;

  &:focus { border-color: #00B4D8; }
`;