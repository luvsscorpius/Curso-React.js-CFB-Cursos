import React from 'react'
import Dados from './Dados'

export default function Body() {
    const canal = 'CFB Cursos'
    const yt = 'youtube.com/cfbcursos'
    const crs = 'Curso de React'
    return (
        <section>
            <h2>Curso de React</h2>
            <p>CFB - Cursos</p>
            <Dados canal={canal} youtube={yt} curso={crs} />
        </section>
    )
}