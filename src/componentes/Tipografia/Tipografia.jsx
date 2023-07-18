import styled from '@emotion/styled';

const componentes = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    body: 'p',
    bodyBold: 'strong',
    body2: 'p',
    body2Bold: 'strong',
    legenda: 'p',
}

const estilos = {
    h1: `
    font-size: 40px;
    font-weight: 600;
    line-height: normal;
    margin:0;
    `,
    h2: `
    font-size: 32px;
    font-weight: 600;
    line-height: normal;
    margin:0;
    `,
    h3: `
    font-size: 24px;
    font-weight: 500;
    line-height: normal;
    margin:0;
    `,
    body: `
    font-size: 20px;
    font-weight: 400;
    line-height: normal;
    margin:0;
    `,
    bodyBold:`
    font-size: 20px;
    font-weight: 700;
    line-height: normal;
    margin:0;
    `,
    body2:`
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    margin:0;
    `,
    body2Bold:`
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    margin:0;
    `,
    legenda:`
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    margin:0;
    `
}

export const Tipografia = ({ variante, componente, children }) => {
    const tag = componentes[componente]
    const ComponenteUtilizado = styled[tag]`${estilos[variante]}`

    return (
        <ComponenteUtilizado>
            {children}
        </ComponenteUtilizado>
    )
}