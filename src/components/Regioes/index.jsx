import React, { useState } from 'react';
import styles from './Regioes.module.scss'
// import { Container } from './styles';

export default function Regioes({regioes, filtrarEstados, setItens}) {

  const [regiaoSelecionada, setRegiaoSeleciona] = useState(null);

  const regiaoClicada = (regiao) => {
    setRegiaoSeleciona(regiao);
    };

  function handleButtonClick(regiao) {
    filtrarEstados(regiao);
    regiaoClicada(regiao);
  }

  return (
    <div className={styles.regioes}>
        <ul className={styles.regioes__lista}>
           {regioes.map((regiao) => {
              return (
              <li 
                key={regiao} 
                onClick={() =>
                handleButtonClick(regiao)
              }
                className={regiaoSelecionada === regiao ? styles.selecionado : ""}
              >
                {regiao}
              </li>
              ); 
            })}
        </ul>
    </div>
  );
}
