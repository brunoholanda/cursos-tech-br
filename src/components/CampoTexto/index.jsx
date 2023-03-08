import React from 'react'
import styles from './CampoTexto.module.scss';

const CampoTexto = ({ type, placeholder, value, onChange }) => {
  return (
    <div className={styles.campotexto}>
        <input
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
        >
        </input>
    </div>
  )
}

export default CampoTexto