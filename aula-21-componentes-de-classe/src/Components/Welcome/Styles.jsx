import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'
import reset from 'styled-reset'

// Resetando o css com styled-reset
export const GlobalStyle = createGlobalStyle`
    ${reset}
`

export const Main = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F2EFE5;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Title = styled.label`
    font-size: 1.7rem;
    font-family: verdana;
`