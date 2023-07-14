import React from "react";
import { Estilos } from "./componentes/EstilosGlobais/Estilos";
import { Card } from "./componentes/Card/Card";
import { ProvedorDoTema } from "./componentes/ProvedorTema/ProvedorTema";

function App() {
	return (
		<ProvedorDoTema>
			<Estilos />
			<Card>
				<h1>Freelando</h1>
			</Card>
		</ProvedorDoTema>
	);
}

export default App;
