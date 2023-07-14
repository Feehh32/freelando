import styled from '@emotion/styled';

const DivEstilizida = styled.div`
    padding:  ${props => props.theme.espacamentos.l};
    border-radius: ${props => props.theme.espacamentos.s};
    border: 1px solid;
    border-color: ${props => props.theme.cores.primarias.a};
    background-color: ${props => props.theme.cores.secundarias.a};
`

export const Card = ({ children }) => {
    return (
        <DivEstilizida>
            {children}
        </DivEstilizida>
    )
}