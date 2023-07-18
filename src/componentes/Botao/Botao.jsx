import styled from '@emotion/styled';

const ButtonPreenchidoEstilizado = styled.button`
    background-color: ${props => props.theme.cores.primarias.b};
    color: ${props => props.theme.cores.neutras.c};
    padding: ${props => props.theme.espacamentos.xs} ${props => props.theme.espacamentos.s};
    border-radius: ${props => props.theme.espacamentos.s};
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    border: none;
    display: flex; 
    gap: 8px;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    &:hover {
        background: ${props => props.theme.cores.dark.b};
    }
    &:focus {
        outline-color: ${props => props.theme.cores.focus};
    }
`

const ButtonTransparenteEstilizado = styled.button`
    background-color: ${props => props.theme.cores.secundarias.a};
    color: ${props => props.theme.cores.primarias.b};
    padding: ${props => props.theme.espacamentos.xs} ${props => props.theme.espacamentos.s};
    border-radius: ${props => props.theme.espacamentos.s};
    border: 2px solid ${props => props.theme.cores.primarias.b};
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    display: flex; 
    gap: 8px;
    transition: all 300ms ease-in-out;
    cursor: pointer;
    &:hover {
        border-color: ${props => props.theme.cores.dark.b};
        color: ${props => props.theme.cores.dark.b};
    }
    &:focus {
        outline-color: ${props => props.theme.cores.focus};
    }
`

export const Botao = ({ variante = "primaria", children, type }) => {

    if (variante === "primaria") {
        return (
            <ButtonPreenchidoEstilizado type={type} >
                {children}
            </ButtonPreenchidoEstilizado>
        )
    }

    return (
        <ButtonTransparenteEstilizado type={type} >
            {children}
        </ButtonTransparenteEstilizado>
    )

}