import styled from "@emotion/styled";

import { FreelandoLogo } from "../FreelandoLogo/FreelandoLogo";
import { Tipografia } from "../Tipografia/Tipografia";
import { IconeInstagram } from "../IconeInstagram/IconeInstagram";
import { IconeTwitch } from "../IconeTwitch/IconeTwitch";
import { IconeTwitter } from "../IconeTwitter/IconeTwitter";
import { IconeWhatsApp } from "../IconeWhatsApp/IconeWhatsApp";

const FooterEstilizado = styled.footer`
    background-color: ${props => props.theme.cores.primarias.a};
    padding: ${props => props.theme.espacamentos.xl};
    color: ${props => props.theme.cores.branco};
    display: flex;
    justify-content: space-between;

    .container__logo {
        display: flex;
        flex-direction: column;
        gap: ${props => props.theme.espacamentos.s};
    }

    .container__links {
        display: flex;
        flex-direction: column;
        gap: ${props => props.theme.espacamentos.s};
        text-align: center;
        
        .lista {
            display: flex;
            gap: ${props => props.theme.espacamentos.xs};
            justify-content: center;
            padding: 0;
            margin: 0;

            li {
                list-style-type: none;
            }
        }
    }
`


export const Rodape = () => {
    return (
        <FooterEstilizado>
            <div className="container__logo">
                <FreelandoLogo width='176' height='40' />
                <Tipografia variante='body2' componente='body2'>Desenvolvido por Alura. Projeto fictício sem fins comerciais.</Tipografia>
            </div>
            <div className="container__links">
                <Tipografia variante='body2' componente='body2'>Acesse nossas redes:</Tipografia>
                <ul className="lista">
                    <li>
                        <a href="/"><IconeInstagram /></a>
                    </li>
                    <li>
                        <a href="/"><IconeTwitch /></a>
                    </li>
                    <li>
                        <a href="/"><IconeTwitter /></a>
                    </li>
                    <li>
                        <a href="/"><IconeWhatsApp /></a>
                    </li>
                </ul>
            </div>
        </FooterEstilizado>
    )
} 