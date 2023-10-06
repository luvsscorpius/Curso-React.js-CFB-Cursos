import React from 'react'

export default function ListaDeItens(props) {
    const itens = props.dados // Array de dados

    return (
        <div>
            <h1>Lista de Itens</h1>
            <ul>
                {itens.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}