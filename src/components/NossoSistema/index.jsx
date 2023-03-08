import styles from './NossoSistema.module.scss';

export default function NossoSistema() {
    return (
        <section className={styles.sistema} scroll-page id="sobre">
            <h1>Nosso Sistema</h1>
            <p>Desenvolvido para ser a plataforma de acompanhamento dos cursos superiores em tecnologia no Brasil. Aqui teremos o mapeamento de quantas faculdades temos em cada Estado, quais as Cidades que as oferecem e se você acessar uma cidade, poderemos ver quais são as faculdades do município.</p>
        </section>
    )
}
