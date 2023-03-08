import styles from './Rodape.module.scss';
import logo from '../../public/img/logo-2.png';

export default function Rodape() {
    return(
        <footer className={styles.rodape}>
            <p>Governo Federal © Todos os direitos reservados</p>
            <img src={logo} alt="logo do govbr" />
            <p>Desenvolvido por Bruno Holanda</p>
        </footer>
    )
}