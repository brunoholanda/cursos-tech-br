import styles from './Cabecalho.module.scss';
import logo from '../../public/img/logo.png';
import { Link } from 'react-router-dom';
import Botao from 'components/Botao';

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <div className={styles.cabecalho__logo}>
                <Link to='./'>
                    <img src={logo} alt="logo do cursos tech BR" />
                </Link>
            </div>
            <div className={styles.cabecalho__links}>
                <Link to="./">
                    Inicio
                </Link>
                <a href="#sobre">Sobre o Sistema</a>
                <a href="#noticias">Notícias</a>
            </div>
            <div className={styles.cabecalho__botao}>
                <Link to="/login">
                    <Botao
                        Text="Entrar"
                    />
                </Link>
            </div>
        </header>
    )
}
