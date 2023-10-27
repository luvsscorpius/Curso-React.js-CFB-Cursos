import React, { useState } from 'react';

function App() {
  const [nome, setNome] = useState('')
  const [carro, setCarro] = useState('HRV')

  return (
    <>
      <label>Digite seu nome</label>
      <input type="text" name="fnome" onChange={(e) => setNome(e.target.value)} value={nome} />
      <p>Nome digitado: {nome}</p>
      <label>Selecione um carro</label>
      <select values={carro} onChange={(e) => setCarro(e.target.value)}>
        <option value='HRV'>HRV</option>
        <option value='Golf'>Golf</option>
        <option value='Fusca'>Fusca</option>
        <option value='Argo'>Argo</option>
      </select>
      <p>Carro Selecionado: {carro}</p>
    </>
  );
}

export default App;
