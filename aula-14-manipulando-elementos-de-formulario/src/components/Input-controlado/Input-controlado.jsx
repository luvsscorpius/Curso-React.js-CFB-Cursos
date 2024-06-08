import React, { useState } from 'react'
import * as C from './Styles.jsx'

const InputControlado = () => {
    const [nome, setNome] = useState('')

    const handleChange = (event) => {
        setNome(event.target.value)
    }

    return (
        <>
            <C.Container>
                <C.Header>
                    <C.h1>Formulário</C.h1>
                </C.Header>

                <C.Body>
                    <C.Form>
                        <C.Label>Nome</C.Label>
                        <C.Input value={nome} onChange={handleChange} />
                    </C.Form>

                    <C.Label>Olá {nome}</C.Label>
                </C.Body>
            </C.Container>
        </>
    )
}

export default InputControlado