import SubHeader from "@/componentes/sub-header/sub_header"
import Footer from "@/componentes/footer/footer"
import ItemLog from "@/componentes/item-log/item_log"
import styles from "@/pages/log-alteracao/log_alteracao.module.css"
import ListaLog from "@/componentes/lista-log/lista-log"

const LogAltercao = () =>{
    return (
        <>
        <SubHeader/>
        <main className={styles.main}>
            <h1>Histórico de alterações: Monstro</h1>
            <ListaLog/>
        </main>

        <Footer/>
        </>
    )
}

export default LogAltercao;