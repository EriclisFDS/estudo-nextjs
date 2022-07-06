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

        </div>
    );
};