import styled from 'styled-components';

export const ContainerPerfil = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 100vh;
  background-color: #f0f2f5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

export const CardPerfil = styled.div`
  width: 100%;
  max-width: 430px;
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Titulo = styled.h2`
  font-size: 24px;
  color: #1c1e21;
  margin-bottom: 8px;
`;

export const Subtitulo = styled.p`
  font-size: 15px;
  color: #606770;
  margin-bottom: 25px;
`;

export const FotoLabel = styled.label`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #f0f2f5;
  display: flex;
  margin: 0 auto 25px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 3px solid #1877f2;
  overflow: hidden;
  transition: transform 0.2s;

  &:hover { transform: scale(1.05); }
  img { width: 100%; height: 100%; object-fit: cover; }
  span { font-size: 12px; color: #1877f2; font-weight: 600; text-align: center; padding: 10px; }
`;

export const FormPerfil = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InputPerfil = styled.input`
  width: 100%;
  height: 52px;
  padding: 0 16px;
  border-radius: 8px;
  border: 1px solid #dddfe2;
  font-size: 15px;
  background: #f5f6f7;

  &:focus {
    outline: none;
    border-color: #1877f2;
    background: white;
  }
`;

export const BotaoSalvar = styled.button`
  width: 100%;
  height: 48px;
  background-color: #1877f2;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 17px;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;

  &:hover { background-color: #166fe5; }
`;

export const BotaoPular = styled.button`
  background: none;
  border: none;
  color: #1877f2;
  font-size: 15px;
  margin-top: 20px;
  cursor: pointer;
  
  &:hover { text-decoration: underline; }
`;