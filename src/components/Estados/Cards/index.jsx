import React from 'react';

export default function Cards({itens, styles}) {
  return (
    <ul className={styles.estados__cards}>
        {itens.map((item)=>{
          return (
            <li key={item.id} className={styles.estados__card}>
              <img className={styles.estados__imagem} src={item.imagem} alt={item.titulo} />
              <p className={styles.estados__texto}>{item.estado}</p>
              <p className={styles.estados__texto}>{item.universidades} Universidades</p>
              <p className={styles.estados__texto}>{item.avaliacao}</p>
            </li>
          )
        })}
        </ul>
  )
}
