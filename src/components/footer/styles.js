import styled from 'styled-components';

export const RodapeInformativo = styled.footer`
  background: #1a1a1a; /* Escuro para contraste */
  color: white;
  padding: 60px 20px 20px;
  font-family: sans-serif;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    text-align: left;
  }

  h2 { 
    font-size: 28px; 
    margin-bottom: 20px;
    color: #00B4D8;
    span { color: white; }
  }

  h3 { font-size: 18px; margin-bottom: 20px; color: #fff; }

  p { font-size: 14px; line-height: 1.6; color: #bbb; }

  ul { list-style: none; padding: 0; }

  li { margin-bottom: 12px; }

  a { 
    color: #bbb; 
    text-decoration: none; 
    font-size: 14px;
    transition: 0.3s;
    &:hover { color: #00B4D8; }
  }

  .copyright {
    margin-top: 50px;
    padding-top: 20px;
    border-top: 1px solid #333;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
`;