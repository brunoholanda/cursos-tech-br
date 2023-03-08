import React from 'react';
import { Link } from 'react-router-dom';
import estrelas from '../../../public/icons/estrela.png'

export default function Cards({ itens, styles, card }) {
  return (
    <ul className={styles.estados__cards}>
      {itens.map((item) => {
        return (
          <li key={item.id} className={styles.estados__card}>
            <img className={styles.estados__imagem} src={item.imagem} alt={item.estado} />
            <div className={styles.estados__descricao}>
              <h2 className={styles.estados__texto}>{item.estado}</h2>
              <p className={styles.estados__texto}>{item.universidades} Universidades</p>
              <p className={styles.estados__texto}>Nota "{item.avaliacao}" <img src={estrelas} alt="avaliacao das universidades" /></p>
              <Link to={`/estado/${item.id}`}> <h4>Ver mais</h4></Link>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
