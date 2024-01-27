import React from 'react';

const Aula = (props) => {
    return (
        <div>
            <legend>Informe a nota: {props.num}</legend>
            <input type="text" value={props.nota} onChange={(e)=>props.setNota(e.target.value)}></input>
        </div>
    )
}

export default Aula