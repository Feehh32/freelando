import styled from "@emotion/styled"
import { Logo } from "../Logo/Logo"
import { Login } from "../Login/Login"

const HeaderStylizado = styled.header`
    background-color:${props => props.theme.cores.primarias.a};
    padding: ${props => props.theme.espacamentos.m} 120px;
    display: flex;
    justify-content: space-between;
`


export const Cabecalho = () => {
    
    return (
        <HeaderStylizado>
            <Logo />
            <Login />
        </HeaderStylizado>
    )
}