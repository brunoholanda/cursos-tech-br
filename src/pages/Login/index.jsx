import styles from './Login.module.scss';
import React, { useState } from 'react'
import CampoTexto from 'components/CampoTexto';
import Botao from 'components/Botao';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import banner from '../../public/img/banner-login.png';

const Login = () => {
    const { signin } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email | !senha) {
            setError("Preencha todos os campos");
            return;
        }

        const res = signin(email, senha);

        if (res) {
            setError(res);
            return;
        }

        navigate("/sistema");
    };

    return (
        <section className={styles.login}>
            <div className={styles.login__formulario}>
            <h1>LOGIN</h1>
                <CampoTexto
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                    label="email"
                />
                <CampoTexto
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <label>{error}</label>
                <div className={styles.login__botao}>
                    <Botao
                        Text="Entrar" onClick={handleLogin}
                    />

                    <Link to="/cadastro">
                        <Botao
                            Text="Fazer Cadastrar"
                        />
                    </Link>
                </div>
            </div>
            <div className={styles.login__banner}>
               <img src={banner} alt="banner da pagina de login" />
            </div>
        </section>
    )
}

export default Login