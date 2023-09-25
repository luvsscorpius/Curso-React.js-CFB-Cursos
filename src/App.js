import React from 'react'
import './App.css'
import Relogio from './componentes/Relogio'

export default function App() {

  const textoDestaque = {
    color: '#00f',
    fontSize: '3em'
  }

  return (
    <>
      <section className='caixa'>
        <Relogio />
        {/* CSS inline */}
        <h1 style={{ color: '#f00', fontSize: '5em' }}>CFB Cursos</h1>
        {/* CSS por constante */}
        <h2 style={textoDestaque}>Curso de React</h2>
        <p className='texto'>Se inscreva em nosso canal e nos siga no instagram</p>
        <a href='https://www.youtube.com/cfbcursos' target='_blank' rel='noopener'>CFB Cursos</a>
      </section>
    </>
  )
}