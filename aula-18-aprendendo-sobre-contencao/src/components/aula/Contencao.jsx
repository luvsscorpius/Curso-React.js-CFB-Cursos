import React from "react";
import Caixa from "./Caixa";
import Canal from "./Canal";

export default function Contencao() {
    return (
        <>
           <Caixa site="www.cfbcursos.com.br">
            {/* São filhos do caixa */}
                <Canal/>
                <p>Curso de React</p>
            </Caixa>     
        </>
    )
}