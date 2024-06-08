import React from "react";

export default function Caixa(props) {
    return (
        <>
        <p>{props.site}</p>
        {/* O props.children retorna todos os elementos filhos de caixa */}
        {/* Como o children é um array posso retorna apenas o filho de tal posição */}
        {props.children[0]}
        {props.children[1]}
        </>
    )
}