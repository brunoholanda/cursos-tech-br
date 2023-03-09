import React from 'react';
import { Link } from 'react-router-dom';
import estrelas from '../../../public/icons/estrela.png'
import styles from './Cards.module.scss';

export default function Cards({ itens }) {
  return (
    <div className={styles.card}>
      <ul className={styles.card__cards}>
        {itens.map((item) => {
          return (
            <Link to={`/estado/${item.id}`}>
              <li key={item.id} className={styles.card__card}>
                <div className={styles.card__imagem}>
                  <img src={item.imagem} alt={item.estado} />
                </div>
                <div className={styles.card__descricao}>
                  <h2 className={styles.card__texto}>{item.estado}</h2>
                  <p className={styles.card__texto}>{item.universidades} Universidades</p>
                  <div className={styles.card__avaliacao}>
                  <p className={styles.card__texto}>Nota {item.avaliacao}</p>
                  <img src={estrelas} alt="avaliação das universidades" />
                  </div>
                </div>
              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}
