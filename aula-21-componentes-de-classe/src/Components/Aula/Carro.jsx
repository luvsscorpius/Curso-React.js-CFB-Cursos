import React from 'react'

// começo com class seguido do nome da classe e herdando de React.Component e depois utilizando o render() e só depois utilizar o return()
class Carro extends React.Component{

    constructor(props) {
        // Chamando o construtor da classe Component
        super(props)
        // Criando uma variável
        this.modelo = 'HRV'
        // Criando o state
        this.state={
            ligado:false,
            velAtual: 0,
        }
    }

    ligarDesligar() {
        this.setState({ligado: !this.state.ligado})
    }

    render(){
        return (
            <>
                <h1>Meu Carro</h1>  
                <p>Modelo: {this.modelo}</p> 
                <p>Ligado: {this.state.ligado ? 'Sim' : 'Não'}</p>
                <p>Velocidade Atual: {this.state.velAtual}</p>
                <button onClick={() => this.ligarDesligar()}>{this.state.ligado ? 'Desligar Carro' : 'Ligar Carro'}</button>
            </>
        )
    }
}

export default Carro