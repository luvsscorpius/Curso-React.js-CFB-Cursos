import React, {useEffect, useState} from "react";

const TituloPagina = () => {

    // Usando o state para guardar o nome da página
    const [titulo, setTitulo] = useState('Página web')

    // Usando o useEffect para mudar o nome da página assim que for carregada
    useEffect(() => {
        document.title = titulo
    })

    return (
        <div>
            {/* Função para quando for clicado no botão o nome da página mude */}
            <button onClick={() => setTitulo('Mudei')}>Mudar nome da página</button>
        </div>
    )
}

export default TituloPagina