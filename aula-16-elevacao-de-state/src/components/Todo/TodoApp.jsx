import React, {useState} from "react";
import TodoList from "./TodoList";

function TodoApp() {
    // Estado inicial com uma lista vazia de tarefas
    const [todos, setTodos] = useState([])

    // Função para adicionar uma nova tarefa a lista
    const addTodo = () => {
        const newTodo = {
            text: 'Nova tarefa',
            completed: true,
        };
        setTodos([...todos, newTodo])
    }

    return (
        <div>
            <h1>Aplicativo de Lista de Tarefas</h1>
            {/* Renderiza o componente TodoList e passa a lista de tarefas */}
            <TodoList todos={todos}/>
            {/* Botão para adicionar uma nova tarefa */}
            <button onClick={addTodo}>Adicionar tarefa</button>
        </div>
    )
}

export default TodoApp