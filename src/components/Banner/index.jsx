import styles from './Banner.module.scss';
import banner from '../../public/img/banner.png'
import Botao from 'components/Botao';
import { Link } from 'react-router-dom';

export default function Banner() {
    return (
        <section className={styles.banner}>
            <img src={banner} alt="banner da da pagina" />
            <div className={styles.banner__info}>
                <h1>CursosTechBR</h1>
                <p>A plataforma desenvolvida para reunir todos os cursos de tecnologia do Brasil</p>
                <Link to="/login">
                <Botao
                    Text="Entrar"
                />
                </Link>
            </div>
        </section>
    )
}