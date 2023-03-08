import React from "react";
import styles from './Estados.module.scss';
import estados from '../json/estados.json';
import Cards from './Cards';
import { useState } from "react";
import Regioes from "components/Regioes";
import CampoTexto from "components/CampoTexto";


// import { Container } from './styles';

export default function Estados() {
  const [itens, setItens] = useState(estados);
  const regioes = [...new Set(estados.map((valor) => valor.regiao))]

  const filtrarEstados = (regiao) => {
    const novosEstados = estados.filter((estado) => {
      return estado.regiao === regiao;
    })

    setItens(novosEstados);

  }

  return (
    <section className={styles.estados}>
      <div className={styles.estados__filtros}>
        <h1>Filtre por Região</h1>
        <CampoTexto 
          type="search"
          placeholder="Pesquise"
        />
      </div>
      <div className={styles.estados__regioes}>
        <Regioes regioes={regioes} filtrarEstados={filtrarEstados} setItens={setItens} />
      </div>
      <Cards itens={itens} styles={styles} />
      <div className={styles.estados__seta}>
        <h3>Explore More</h3>
      </div>
    </section>
  )

}