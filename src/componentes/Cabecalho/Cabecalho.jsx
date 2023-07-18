import { Login } from "../Login/Login";
import { FreelandoLogo } from "../FreelandoLogo/FreelandoLogo";

import styled from "@emotion/styled";
import { Col, Container, Row } from "react-grid-system";

const HeaderStylizado = styled.header`
    background-color:${props => props.theme.cores.primarias.a};
    padding: ${props => props.theme.espacamentos.m};
`

export const Cabecalho = () => {

    return (
        <HeaderStylizado>
            <Container>
                <Row align="center">
                    <Col>
                        <FreelandoLogo />
                    </Col>
                    <Col style={{textAlign: 'right'}}> 
                        <Login>Login</Login>
                    </Col>
                </Row>
            </Container>
        </HeaderStylizado>
    )
}