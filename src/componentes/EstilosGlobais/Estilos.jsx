import { Global } from "@emotion/react"

const estilos = tema => {
    return {
        html: {
            fontFamily: tema.fontFamily,
        },

        body:{
            padding:0,
            margin:0
        }
    }
}

export const Estilos = () => {
    return (
        <Global styles={estilos}/>
    )
}