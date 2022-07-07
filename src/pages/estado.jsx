import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado(props) {

    const [numero, setNumero] = useState(3);

    function Inc() {
        setNumero(numero + 1);
        console.log("incrementar");
    }

    return(
        <Layout titulo="Compoonente com Estado">
            <span>{numero}</span>
            <button onClick={Inc} >Inc</button>
        </Layout>
    );
}