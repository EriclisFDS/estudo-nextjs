import Navegador from "../components/Navegador";


export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador texto="Estiloso" destino="/estiloso"></Navegador>
            <Navegador texto="Exemplo" destino="/exemplo" cor="#9400d3"></Navegador>
            <Navegador texto="jsx" destino="/jsx" cor="crimson"></Navegador>
            <Navegador texto="Navegacao #01 simples" destino="/navegacao" cor="green"></Navegador>
            <Navegador texto="Navegacao #02 dinamica" destino="/cliente/sp_2/123" cor="blue"></Navegador>
            <Navegador texto="Componente com Estado" destino="/estado" cor="pink"></Navegador>
            <Navegador texto="Integração com API #01" destino="/integracao_1" cor="#42a9a9"></Navegador>
            <Navegador texto="Conteudo Estático" destino="/estatico" cor="#fa054a"></Navegador>
            <Navegador texto="Conteudo Dinamico" destino="/dinamico" cor="#fa054a"></Navegador>
        </div>
    );
};