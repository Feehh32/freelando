import { ThemeProvider } from '@emotion/react';

const tema = {
    cores: {
        branco:'',
        atencao: '',
        focus: '',
        primarias: {
            a: '#5754ED',
            b: '',
            c: ''
        },
        secundarias: {
            a: '#EBEAF9',
            b: '',
            c: ''
        },
        neutras: {
            a: '#373737',
            b: '',
            c: '#F5F5F5',
            d: ''
        },
        branco: "#FFFFFF",
        dark: {
            a: '',
            b: ''
        }
    },
    espacamentos:{
        xs: '8px',
        s: '16px',
        m: '24px',
        l: '32px',
        xl: '48px'
    },
    fontFamily: "'Montserrat', sans-serif"
}

export const ProvedorDoTema = ({ children }) => {
    return (
        <ThemeProvider theme={tema}>
            {children}
        </ThemeProvider>
    )
}
