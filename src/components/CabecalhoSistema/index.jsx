import styles from './CabecalhoSistema.module.scss';
import logo from '../../public/img/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import sair from '../../public/icons/sair.png';
import useAuth from 'hooks/useAuth';


export default function CabecalhoSistema() {

    const { signout } = useAuth();
    const navigate = useNavigate();

    return (
        <header className={styles.cabecalho}>
            <div className={styles.cabecalho__logo}>
                <Link to='./'>
                    <img src={logo} alt="logo do cursos tech BR" />
                </Link>
            </div>
            <div className={styles.cabecalho__botao}>
                <img src={sair} alt="botao de sair do acesso restrito" title='sair do sistema'
                onClick={() => [signout(), navigate("/")]}/>
            </div>
        </header>
    )
}
