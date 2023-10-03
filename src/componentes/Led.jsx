import React, { useState } from 'react'
import ledVerde from './imgs/ledVerde.png'
import ledVermelho from './imgs/ledVermelho.png'

export default function Led(props) {

    return (
        <>
            <img src={props.ligado ? ledVerde : ledVermelho} style={{ width: '50px' }} />
            <button onClick={() => props.setLigado(!props.ligado)}>{props.ligado ? 'Desligar' : 'Ligar'}</button>
        </>
    )
}