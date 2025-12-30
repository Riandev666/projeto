import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import {
  ContainerPerfil, CardPerfil, FotoLabel, Titulo, Subtitulo,
  FormPerfil, InputPerfil, BotaoSalvar, BotaoPular
} from "./styles";

export default function Perfil() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [cpf, setCpf] = useState("");
  const [foto, setFoto] = useState(null);

  const handleFoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setFoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const salvarDados = async () => {
    const token = localStorage.getItem("@Opinai:token");
    try {
      await api.put("/api/user/update", {
        nome, email, celular, cpf, foto
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      navigate("/pesquisas");
    } catch (error) {
      console.error("Erro ao salvar perfil:", error);
      navigate("/pesquisas");
    }
  };

  return (
    <ContainerPerfil>
      <CardPerfil>
        <Titulo>Complete seu perfil</Titulo>
        <Subtitulo>Adicione suas informações para validar sua conta.</Subtitulo>

        <FotoLabel>
          <input type="file" hidden accept="image/*" onChange={handleFoto} />
          {foto ? <img src={foto} alt="Sua foto" /> : <span>Clique para adicionar foto</span>}
        </FotoLabel>

        <FormPerfil>
          <InputPerfil placeholder="Nome completo" value={nome} onChange={e => setNome(e.target.value)} />
          <InputPerfil placeholder="E-mail de contato" value={email} onChange={e => setEmail(e.target.value)} />
          <InputPerfil placeholder="WhatsApp" value={celular} onChange={e => setCelular(e.target.value)} />
          <InputPerfil placeholder="CPF para recebimento" value={cpf} onChange={e => setCpf(e.target.value)} />

          <BotaoSalvar onClick={salvarDados}>Salvar perfil</BotaoSalvar>
        </FormPerfil>

        <BotaoPular onClick={() => navigate("/pesquisas")}>Pular por enquanto</BotaoPular>
      </CardPerfil>
    </ContainerPerfil>
  );
}