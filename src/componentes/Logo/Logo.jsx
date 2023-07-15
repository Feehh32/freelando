import styled from '@emotion/styled';

const LinkEstilizado = styled.a`
    text-decoration: none;
    color:${props => props.theme.cores.neutras.c};
    font-size: 20px;
    font-weight: 500;
`

export const Logo = () => {
    return (
        <LinkEstilizado href="/">Freelando</LinkEstilizado>
    )
}