import Layout from "../../../components/Layout";
import { useRouter } from "next/router";

export default function ClientePorCodigo(props) {
    
    const router = useRouter();
    
    return (
        <Layout titulo="Navegação Dinaâmica" >
            <div>Codigo = {router.query.codigo}</div>
            <div>Filial = {router.query.filial}</div>
            
        </Layout>
    );
}