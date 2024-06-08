import React,{useState} from 'react';

const Resultado = (props) => {

    return (
        <div>
            <p>Soma das notas: {props.somaNotas}</p>
            <p>{props.somaNotas >= 60 ? "Aprovado" : "Reprovado"}</p>
        </div>
    )
}

export default Resultado