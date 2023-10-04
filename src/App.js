import React, { useState } from 'react'
import './App.css'

export default function App() {

  const [log, setLog] = useState(true)

  const msgLogIn = () => {
    return 'Usuário logado'
  }

  const msgLogOff = () => {
    return 'Por favor logar'
  }

  const cumprimento = () => {
    const hora = new Date().getHours()
    if (hora >= 0 && hora < 13) {
      return <p>Bom dia!</p>
    } else if (hora >= 13 && hora < 18) {
      return <p>Boa tarde!</p>
    } else {
      return <p>Boa noite!</p>
    }
  }

  return (
    <>
      {cumprimento()}
      <p>{log ? msgLogIn() : msgLogOff()}</p>
      <button onClick={() => setLog(!log)}>{log ? 'LogOff' : 'LogIn'}</button>
    </>
  )
}