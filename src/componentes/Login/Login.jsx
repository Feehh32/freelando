import styled from '@emotion/styled';

const LinkEstilizado = styled.a`
    text-decoration: none;
    color: ${props => props.theme.cores.neutras.c};
    font-size: 20px;
    font-weight: 400;
    cursor: pointer;
    transition: all 300ms ease-in-out;

    &:hover {
        color: ${props => props.theme.cores.dark.a};
    }
`

export const Login = ({children}) => {
    return (
        <LinkEstilizado>{children}</LinkEstilizado>
    ) 
}