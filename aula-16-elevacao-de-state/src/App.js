import React, {useState} from 'react'
import Aula from './components/aula/Aula'
import Resultado from './components/aula/Resultado'
import TodoApp from './components/Todo/TodoApp';

function App() {
  // const [nota1, setNota1] = useState(0)
  // const [nota2, setNota2] = useState(0)
  // const [nota3, setNota3] = useState(0)
  // const [nota4, setNota4] = useState(0)

  return (
    // <>
    // <Aula num={1} nota={nota1} setNota1={setNota1}/>
    // <Aula num={2} nota={nota2} setNota2={setNota2}/>
    // <Aula num={3} nota={nota3} setNota3={setNota3}/>
    // <Aula num={4} nota={nota4} setNota4={setNota4}/>

    // <Resultado somaNotas={nota1+nota2+nota3+nota4}/>
    // </>
    <TodoApp/>
  );
}

export default App;
