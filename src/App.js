import React from "react";

import { Estilos } from "./componentes/EstilosGlobais/Estilos";
import { Card } from "./componentes/Card/Card";
import { ProvedorDoTema } from "./componentes/ProvedorTema/ProvedorTema";
import { Cabecalho } from "./componentes/Cabecalho/Cabecalho";
import { Tipografia } from "./componentes/Tipografia/Tipografia";
import { CampoTexto } from "./componentes/CampoTexto/CampoTexto";
import { Rodape } from "./componentes/Rodape/Rodape";
import { Col, Container, Row } from "react-grid-system";
import { Botao } from "./componentes/Botao/Botao";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from 'react-icons/ai';

function App() {
	return (
		<ProvedorDoTema>
			<Estilos />
			<Cabecalho />
			<Container style={{ margin: '80px 0' }}>
				<Row justify="center">
					<Col lg={6} md={8} sm={12}>
						<Card>
							<div style={{textAlign: 'center'}}>
								<Tipografia variante="h1" componente="h1" >Crie seu cadastro</Tipografia>
								<Tipografia variante="body" componente="body">
									Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
								</Tipografia>
							</div>
							<Row>
								<Col >
									<CampoTexto titulo="Nome Completo" />
								</Col>
							</Row>
							<Row>
								<Col lg={4} md={4} sm={4} >
									<CampoTexto titulo="Estado" />
								</Col>
								<Col lg={8} md={8} sm={8} >
									<CampoTexto titulo="Cidade" />
								</Col>
							</Row>
							<Row>
								<Col >
									<CampoTexto titulo="E-mail" type="email" />
								</Col>
							</Row>
							<Row>
								<Col lg={6} md={6} sm={6} >
									<CampoTexto titulo="Senha" type="password" />
								</Col>
								<Col lg={6} md={6} sm={6} >
									<CampoTexto titulo="Repita a senha" type="password" />
								</Col>
							</Row>
							<Row>
								<Col lg={6} md={6} sm={6}>
									<Botao type="button" variante="secundaria" >
										<AiOutlineArrowLeft size={16} />
										Anterior
									</Botao>
								</Col>
								<Col lg={6} md={6} sm={6}>
									<div style={{ display: 'flex', justifyContent: 'end' }}>
										<Botao type="button" >
											Próximo
											<AiOutlineArrowRight size={16} />
										</Botao>
									</div>
								</Col>
							</Row>
						</Card>
					</Col>
				</Row>
			</Container>
			<Rodape />
		</ProvedorDoTema >
	);
}

export default App;
