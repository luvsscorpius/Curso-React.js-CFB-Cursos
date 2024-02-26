import React, {useState} from 'react'
import Carro from './Carro'

const Aula = () => {

    // Aula 25 
    const [carro, setCarro] = useState(true)

    const mostrarOcultar = () => {
        setCarro(!carro)
    }

    return (
        <>
            <h1>Componentes de Classe</h1>
            {carro ? 
            <Carro fator={1}/> : '' }
            <button onClick={() => mostrarOcultar()}>{carro ? 'Ocultar' : 'Mostrar'}</button>
        </>
    )
}

export default Aula