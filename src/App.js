import React, { useState } from 'react'
import './App.css'
import Numero from './componentes/Numero'

export default function App() {

  const [num, setNum] = useState(50)

  return (
    <>
      <p>Valor do state num em App: {num}</p>
      <Numero num={num} setNum={setNum} />
    </>
  )
}