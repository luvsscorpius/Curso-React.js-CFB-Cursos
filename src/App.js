import React from 'react';
import ListaDeItens from './componentes/ListaDeItens';

function App() {
  const dados = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <h1>Meu Aplicativo</h1>
      <ListaDeItens dados={dados} />
    </div>
  );
}

export default App;
