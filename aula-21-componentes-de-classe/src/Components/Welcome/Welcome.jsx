import React from 'react'
import * as W from './Styles'

class Welcome extends React.Component{
    render() {
        return (
            <>
            <W.GlobalStyle/>
                <W.Main>
                    <W.Content>
                        <W.Title>Bem-vindo ao meu aplicativo!</W.Title>
                    </W.Content>
                </W.Main>
            </>
        )
    }
}

export default Welcome