import React from 'react'

// começo com class seguido do nome da classe e herdando de React.Component e depois utilizando o render() e só depois utilizar o return()
class Classe extends React.Component{

    constructor(props) {
        // Chamando o construtor da classe Component
        super(props)
    }

    render(){
        return (
            <>
                <h1>Primeiro Componente de Classe</h1>   
                {/* Precisamos usar o this pois o props esta sendo utilizado dentro do constructor */}
                <p>Canal: {this.props.canal}</p>
                <p>Curso: {this.props.curso}</p>
            </>
        )
    }
}

export default Classe