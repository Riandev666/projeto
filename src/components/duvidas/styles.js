import styled from 'styled-components';

export const SecaoPadrao = styled.section`
  padding: 40px 20px;
`;

export const TituloSecao = styled.h3`
  color: #00B4D8;
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

export const ItemDuvidaContainer = styled.div`
  border-bottom: 1px solid #eee;
  cursor: pointer;
`;

export const PerguntaDuvida = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
  color: #00B4D8;
  font-weight: 600;
  font-size: 16px;

  span {
    transition: transform 0.3s ease;
    transform: ${props => props.aberto ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;

export const RespostaDuvida = styled.div`
  max-height: ${props => props.aberto ? '200px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  padding-bottom: ${props => props.aberto ? '18px' : '0'};
`;