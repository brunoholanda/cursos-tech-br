import React from 'react'
import Rodape from 'components/Rodape';
import CabecalhoSistema from 'components/CabecalhoSistema';
import Estados from 'components/Estados';

export default function Sistema() {
    return (
        <section>
            <CabecalhoSistema />
            <Estados />

            <Rodape />
        </section>
    )
}

