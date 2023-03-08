import { useRef } from 'react';
import styles from './Noticias.module.scss';
import noticia1 from '../../public/img/noticia-1.png';
import noticia2 from '../../public/img/noticia-2.png';

export default function Noticias() {

    const carrossel = useRef(null);

    const handleLftClick = (e) => {
        e.preventDefault();
        carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carrossel.current.scrollLeft += carrossel.current.offsetWidth;
    }

    return (
        <section className={styles.noticias} scroll-page id="noticias">
            <h1>Notícias Recentes</h1>
            <div className={styles.noticias__conteudo}>
                    <button onClick={handleLftClick}></button>
                <div className={styles.noticias__cards} ref={carrossel}>
                    <img src={noticia1} alt="imagem da noticia 1" />
                    <img src={noticia2} alt="imagem da noticia 1" />
                </div>
                    <button onClick={handleRightClick}></button>
            </div>
        </section>
    )
}
