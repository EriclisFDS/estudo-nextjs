import { useState } from "react";
import Layout from "../components/Layout";

export default function Integracao() {

    const [client, setClient] = useState({});
    const [codigo, setCodigo] = useState(1);
    
    // function obterCliente() {
    //     fetch(`http://localhost:3000/api/clientes/${codigo}`)
    //         .then(resp => resp.json())
    //         .then(data => setClient(data));
    // }   ----------> versao com promise   <------------

    async function obterCliente() {
        const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`);
        const data = await resp.json();    
        setClient(data);
    }
    // ---------> versao com async await <-------------
    
    return (
        <Layout >
            <div>
                <input type="number" onChange={e => setCodigo(e.target.value)} value={codigo} />
                <button onClick={obterCliente}>Obter CLiente</button>

            </div>
            <ul>
                <li>Codigo: {client.id}</li>
                <li>Nome: {client.nome}</li>
                <li>Email: {client.email}</li>
            </ul>
        </Layout>
    );
}