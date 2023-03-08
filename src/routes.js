import ScrollToTop from "components/ScrollToTop";
import useAuth from "hooks/useAuth";
import Cadastro from "pages/Cadastro";
import CorpoDaPagina from "pages/CorpoDaPagina";
import Estado from "pages/Estado";
import Inicio from "pages/Inicio";
import Login from "pages/Login";
import PaginaDeErro from "pages/PaginaDeErro";
import Sistema from "pages/Sistema";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Private = ({ Item }) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item /> : <Login />
}

function AppRoutes() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<CorpoDaPagina />}>
                    <Route index element={<Inicio />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="*" element={<PaginaDeErro />} />
                </Route>
                <Route exact path="/sistema" element={<Private Item={Sistema} />}>
                <Route path="estado/:id" element={<Estado />} />
                    <Route path="*" element={<PaginaDeErro />} />
                    
                </Route>
               
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;