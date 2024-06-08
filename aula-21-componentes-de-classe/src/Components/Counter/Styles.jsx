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
    background-color: #2D3250;
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
    flex-direction: column;
    background-color: #424769;
    border-radius: 10px; 
`

export const ContentItem = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const Title = styled.label`
    font-size: 1.5rem;
    font-family: verdana;
    color: #eee;
`

export const P = styled.p`
    font-size: 1.3rem;
    color: #eee;
`

export const Button = styled.button`
    cursor: pointer;
    background-color: #7077A1;
    border: 0;
    width: 30px;
    border-radius: 3px;
    color: #424769;
`