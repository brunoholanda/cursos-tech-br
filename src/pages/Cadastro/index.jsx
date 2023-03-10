import styles from './Cadastro.module.scss';
import React, { useState } from 'react'
import CampoTexto from 'components/CampoTexto';
import Botao from 'components/Botao';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import banner from '../../public/img/banner-login.png';

function Cadastro() {

    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const { signup  } = useAuth();

    const handleSignup = () => {
        if(!email | !emailConf | !senha) {
            setError("Preencha todos os campos");
            return;
        } else if (email !== emailConf) {
            setError("Os emails nao estão iguais");
            return;
        }

        const res = signup(email, senha);

        if (res) {
            setError(res);
            return;
        }

        alert("Usuário cadastrado com sucesso!");
        navigate("/login");
    };

    return (
        <section className={styles.cadastro}>
            <div className={styles.cadastro__banner}>
                <img src={banner} alt="banner da tela de cadastro" />
            </div>
            <div className={styles.cadastro__formulario}>
                <h1>SISTEMA DE CADASTRO</h1>
                <CampoTexto
                    type="email"
                    placeholder="Digite seu E-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <CampoTexto
                    type="email"
                    placeholder="Confirme seu E-mail"
                    value={emailConf}
                    onChange={(e) => [setEmailConf(e.target.value), setError("")]}
                />
                <CampoTexto
                    type="password"
                    placeholder="Digite sua Senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <label>{error}</label>
                <Botao
                    Text="Cadastrar" onClick={handleSignup}
                />
                <p>Ja tem uma conta?</p>
                <Link to="/login">
                <Botao
                    Text="Entre"
                />
                </Link>
            </div>
        </section>
    )
}

export default Cadastro;