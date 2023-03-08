import React from 'react'
import styles from './Botao.module.scss';

const Botao = ({ Text, onClick, Type = "button" }) => {
  return (
    <div className={styles.botao}>
        <button 
            type={Type}
            onClick={onClick}
        >
            {Text}
        </button>
    </div>
  )
}

export default Botao;