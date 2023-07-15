import styled from '@emotion/styled';

const LinkEstilizado = styled.a`
    text-decoration: none;
    color: ${props => props.theme.cores.neutras.c};
    font-size: 20px;
    font-weight: 400;
`

export const Login = () => {
    return (
        <LinkEstilizado>Login</LinkEstilizado>
    ) 
}