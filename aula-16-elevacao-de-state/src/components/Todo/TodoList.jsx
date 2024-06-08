import React from "react";
import TodoItem from "./TodoItem";

function TodoList({todos}){
    return (
        <div>
            <h2>Lista de Tarefas</h2>
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo}/>
            ))}
        </div>
    )
}

export default TodoList