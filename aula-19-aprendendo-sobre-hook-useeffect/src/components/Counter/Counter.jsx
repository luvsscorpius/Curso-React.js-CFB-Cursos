import React, {useEffect, useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Incrementa o contador a cada segundo
            setCount(prevCount => prevCount + 1)
        }, 1000)


        // Retorna uma função de limpeza para limpar o intervalo quando o componente for desmontado
        return () => clearInterval(intervalId)
    }, []) // Passa a matriz vazia para garantir que o efeito seja executado apenas uma vez, após a renderização inicial

    return (
        <div>
            <h2>Contador</h2>
            <p>O contador esta em: {count}</p>
        </div>
    )
}

export default Counter;