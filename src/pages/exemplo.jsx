import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function Exemplo(props) {
    return(
        <Layout titulo="Usando Componentes">
            <Cabecalho titulo="Next.js & React"></Cabecalho>
            <Cabecalho titulo="Aprenda Next na prática" ></Cabecalho>
        </Layout>
    );
}