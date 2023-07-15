import React from "react";
import { Estilos } from "./componentes/EstilosGlobais/Estilos";
import { Card } from "./componentes/Card/Card";
import { ProvedorDoTema } from "./componentes/ProvedorTema/ProvedorTema";
import { Cabecalho } from "./componentes/Cabecalho/Cabecalho";
import { Tipografia } from "./componentes/Tipografia/Tipografia";
import { CampoTexto } from "./componentes/CampoTexto/CampoTexto";
import { Rodape } from "./componentes/Rodape/Rodape";

function App() {
	return (
		<ProvedorDoTema>
			<Estilos />
			<Cabecalho />
			<Card>
				<Tipografia variante="h1" componente="h1" >Crie seu cadastro</Tipografia>
				<Tipografia variante="body" componente="body">
					Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
				</Tipografia>
				<CampoTexto titulo="Nome Completo" />
			</Card>
			<Rodape />
		</ProvedorDoTema>
	);
}

export default App;
