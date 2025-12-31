import React from "react";
import { RodapeInformativo } from "./styles";

export default function Footer() {
  return (
    <RodapeInformativo id="sobre">
      <div className="container">
        <div>
          <h2>Opin<span>aí</span></h2>
          <p>
            Uma comunidade criada para dar voz às suas opiniões. 
            Influencie empresas em toda a América Latina e receba recompensas por isso.
          </p>
        </div>

        <div>
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="#como-funciona">Como Funciona</a></li>
            <li><a href="/cadastro">Cadastre-se</a></li>
          </ul>
        </div>

        <div>
          <h3>Redes Sociais</h3>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        &copy; 2025 OpinAí. Todos os direitos reservados.
      </div>
    </RodapeInformativo>
  );
}