import Footer from "@/componentes/footer/footer";
import ListaPromocao from "@/componentes/lista-promocao/lista_promocao";
import SubHeader from "@/componentes/sub-header/sub_header";
import styles from "@/pages/todas-promocoes/todas-promocoes.module.css"
const TodasPromocoes = () =>{
    return(
        <>
        <SubHeader/>
        <main className={styles.main}>
            <div className={styles.container_promocao}>
            <h1>Todas as promoções</h1>
            <a href="">Criar Promoção</a>
            </div>
            <ListaPromocao/>
        </main>
        <Footer/>
        </>

    );
};

export default TodasPromocoes;