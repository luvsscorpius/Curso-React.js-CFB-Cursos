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
        // Bind
        this.ld= this.ligarDesligar.bind(this)
    }

    ligarDesligar() {
        // this.setState({ligado: !this.state.ligado})

        // Outra utilização do setState
        this.setState(
            (state) => (
                {ligado : !state.ligado}
            )
        )
    }

    // Pegando o valor de props la de aula.jsx e atualizando o valor do state velAtual para cada vez que eu clicar no botão acelerar ele incremente o valor de velAtual.
    acelerar() {
        this.setState(
            (state, props) => (
                {velAtual: state.velAtual + props.fator}
            )
        )
    }

    render(){
        return (
            <>
                <h1>Meu Carro</h1>  
                <p>Modelo: {this.modelo}</p> 
                <p>Ligado: {this.state.ligado ? 'Sim' : 'Não'}</p>
                <p>Velocidade Atual: {this.state.velAtual}</p>
                <button onClick={this.ld}>{this.state.ligado ? 'Desligar Carro' : 'Ligar Carro'}</button>
                <button onClick={() => this.acelerar()}>Acelerar</button>
            </>
        )
    }
}

export default Carro