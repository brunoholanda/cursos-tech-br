import React from "react";
import styles from './Estados.module.scss';
import estados from '../json/estados.json';
import Cards from './Cards';
import { useState } from "react";
import Regioes from "components/Regioes";
import CampoTexto from "components/CampoTexto";
import Botao from "components/Botao";


// import { Container } from './styles';

export default function Estados() {
  const [itens, setItens] = useState(estados);
  const regioes = [...new Set(estados.map((valor) => valor.regiao))]

  const [termoBusca, setTermoBusca] = useState('');

  const filtrarEstados = (regiao) => {
    const novosEstados = estados.filter((estado) => {
      return estado.regiao === regiao;
    })

    setItens(novosEstados);

  }

  const buscarEstados = (termo) => {
    const novosEstados = estados.filter((estado) => {
      return estado.estado.toLowerCase().includes(termo.toLowerCase());
    })
    setItens(novosEstados);
    setTermoBusca(termo);
  }

  return (
    <section className={styles.estados}>
      <div className={styles.estados__filtros}>
        <h1>Filtre por Região</h1>
        <CampoTexto 
          type="search"
          placeholder="Pesquise por estado"
          value={termoBusca}
          onChange={(e) => buscarEstados(e.target.value)}
        />
      </div>
      <div className={styles.estados__regioes}>
        <Regioes regioes={regioes} filtrarEstados={filtrarEstados} setItens={setItens} />
      </div>
      <Cards itens={itens} styles={styles} />
      <div className={styles.estados__botao}>
        <Botao 
          Text="Ver Mais"
        />
      </div>
    </section>
  )

}