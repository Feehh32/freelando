import styled from "@emotion/styled"

const LabelEstilizada = styled.label`
    display: block;
    width: 100%;
    font-weight: 400;
    font-size: 20px;
    line-heigth: normal;
    box-sizing: border-box;
`

const InputEstilizado = styled.input`
    display: block;
    width: 100%;
    margin-top: ${props => props.theme.espacamentos.xs};
    background-color: ${props => props.theme.cores.branco};
    border-radius: ${props => props.theme.espacamentos.s};
    border: 1px solid;
    border-color: ${props => props.theme.cores.neutras.a};
    outline: none;
    height: 40px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    padding-left: ${props => props.theme.espacamentos.s};
    box-sizing: border-box;
`

export const CampoTexto = ({titulo}) => {
    return (
        <LabelEstilizada >
            {titulo}
            <InputEstilizado type="text" />
        </LabelEstilizada>
    )
}