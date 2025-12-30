import styled from 'styled-components';

export const ContainerAdmin = styled.main`
  background-color: #f5f7fa;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const HeaderAdmin = styled.div`
  padding: 20px 0;
  text-align: center;
  
  h2 {
    color: #333;
    font-size: 22px;
    font-weight: 800;
  }
`;

export const FormMobile = styled.div`
  background: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: 700;
  color: #5367B0;
  margin-bottom: -10px;
  margin-left: 5px;
  text-transform: uppercase;
`;

export const InputMobile = styled.input`
  width: 100%;
  height: 50px;
  background: #f9f9f9;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 0 15px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #5367B0;
  }
`;

export const TextAreaMobile = styled.textarea`
  width: 100%;
  height: 120px;
  background: #f9f9f9;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 15px;
  font-size: 16px;
  font-family: inherit;
  resize: none;

  &:focus {
    outline: none;
    border-color: #5367B0;
  }
`;

export const BotaoAcao = styled.button`
  width: 100%;
  height: 55px;
  background: linear-gradient(135deg, #5367B0 0%, #3D4E8B 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  
  &:active {
    transform: scale(0.98);
  }
`;