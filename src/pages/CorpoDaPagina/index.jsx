import Cabecalho from "components/Cabecalho";
import NossoSistema from "components/NossoSistema";
import Noticias from "components/Noticias";
import Rodape from "components/Rodape";
import { Outlet } from "react-router-dom";

function CorpoDaPagina() {
    return (
        <main>
            <Cabecalho />
            <Outlet />
            <NossoSistema />
            <Noticias />
            <Rodape /> 
        </main>
    )
}

export default CorpoDaPagina;