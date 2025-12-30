import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Carrossel from "../../components/carrossel/Carrossel";
import Recompensas from "../../components/recompensas/Recompensas";
import {
  ConteudoFundo,
  RodapeInformativo,
} from "./styles";
import Duvidas from "../../components/duvidas/Duvidas";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <ConteudoFundo>
      <Header />
      <Banner />
      <Carrossel />
      <Recompensas />
      <Duvidas/>
      <Footer/>
    </ConteudoFundo>
  );
}
