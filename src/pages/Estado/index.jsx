import estados from '../../components/json/estados.json';
import { useParams } from 'react-router-dom';
import styles from './Estado.module.scss';

export default function Estado() {

    const parametros = useParams(); //um hock do react router dom

    const estado = estados.find((item) => {
        return item.id === (parametros.id);
    })

    return (
        <article className={styles.paginadoproduto}>
            <section className={styles.paginadoproduto__sessao}>
                <div>
                    <img className={styles.estados__imagem} src={estado.imagem} alt={estado.estado} />
                </div>

                <div className={styles.paginadoproduto__texto}>
                    <h3>{estado.texto}</h3>
                    <p>{estado.instituicoes}</p>
                </div>
            </section>
        </article>
    )
}