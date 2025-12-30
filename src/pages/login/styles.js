import styled from 'styled-components';

export const ContainerLogin = styled.main`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #0077B6 0%, #00B4D8 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const HeaderLogin = styled.header`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  background: white;
  padding: 15px 20px;
  border-radius: 8px;

  h1 { font-size: 24px; color: #00B4D8; font-weight: 800; }
`;

export const CardCadastro = styled.section`
  background: white;
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  padding: 40px 20px;
  text-align: center;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
  margin-top: 100px;
`;

export const TituloCadastro = styled.h2`
  color: #00B4D8;
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 10px;
`;

export const Subtitulo = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 30px;
`;

export const BotaoSocial = styled.button`
  width: 100%;
  height: 55px;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover { opacity: 0.9; }

  &.facebook { background-color: #1877F2; }
  &.instagram { background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); }
  &.google { background-color: #DB4437; }

  img { width: 24px; height: 24px; }
`;

export const LinkLogin = styled.p`
  margin-top: 25px;
  font-size: 14px;
  color: #666;

  span {
    color: #00B4D8;
    font-weight: bold;
    cursor: pointer;
  }
`;