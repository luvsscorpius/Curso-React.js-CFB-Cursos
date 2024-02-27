import React from 'react'

export default class BaseClass extends React.Component {
    constructor(props) {
        // Chama a super classe que essa classe ta extendendo, o component
        super(props)
        // State
        this.state = {
            canal: 'CFB Cursos',
            curso: 'React',
            ativo: true,
            nome: this.props.nomeAluno
        }
        // Instruções do constructor

        // Bind
        this.ad = this.ativarDesativar.bind(this)
    }

    ativarDesativar() {
        // Outra utilização do setState
        this.setState(
            (state) => (
                {ativo : !state.ativo}
            )
        )
    }

    componentDidMount() {
        console.log('O componente foi criado')
    }

    componentDidUpdate() {
        console.log('O componente foi atualizado')
    }

    componentWillUnmount() {
        console.log('O componente foi removido')
    }

    render() {
        return (
            <>
                <h1>Componente de classe</h1>
                <p>Canal: {this.state.canal}</p>
                <p>Curso: {this.state.curso}</p>
                <p>Ativo: {this.state.ativo ? 'Ativo' : 'Desativado'}</p>
                <button onClick={this.ad}>{this.state.ativo ? 'Ativar' : 'Desativar'}</button> 
                <p>Nome do aluno: {this.state.nome}</p>
            </>
        )
    }
}