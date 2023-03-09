import estados from '../../components/json/estados.json';
import { Link, useParams } from 'react-router-dom';
import styles from './Estado.module.scss';
import CabecalhoSistema from 'components/CabecalhoSistema';
import Rodape from 'components/Rodape';
import Cards from 'components/Estados/Cards';
import { useState } from 'react';
import Botao from 'components/Botao';

export default function Estado() {

    const parametros = useParams(); //um hock do react router dom
    const [itens] = useState(estados);

    const estado = estados.find((item) => {
        return item.id === (parametros.id);
    })


    return (
        <article className={styles.estado}>
            <CabecalhoSistema />
            <div className={styles.estado__botao}>
            <Link to="/sistema">
            <Botao
                Text="Voltar"
            />
            </Link>
            </div>
            <div className={styles.estado__sessao}>
                <div>
                    <img className={styles.estados__imagem} src={estado.imagem} alt={estado.estado} />
                </div>

                <div className={styles.estado__texto}>
                    <h2>{estado.estado}</h2>
                    <p>{estado.texto}</p>
                </div>
            </div>
            <div className={styles.estado__instituicoes}>
                <h2>Universidades</h2>
                <p>{estado.instituicoes}</p>
            </div>
            <div className={styles.estado__cards}>
                <Cards itens={itens.slice(0, 3)} />
            </div>
            <Rodape />
        </article>
    )
}