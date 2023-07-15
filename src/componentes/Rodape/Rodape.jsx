import styled from "@emotion/styled"

const FooterEstilizado = styled.footer`
    background-color: ${props => props.theme.cores.primarias.a};
    padding: ${props => props.theme.espacamentos.xl};
    color: ${props => props.theme.cores.branco}
`


export const Rodape = () => {
    return (
        <FooterEstilizado>

        </FooterEstilizado>
    )
} 