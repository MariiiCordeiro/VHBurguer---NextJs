import Footer from "@/componentes/footer/footer"
import SubHeader from "@/componentes/sub-header/sub_header"
import styles from "@/pages/criar-categoria/criar_categoria.module.css"

const CriarCategoria = () => {
  return (
    <>
    <SubHeader />
    <main className={styles.main}>
    <div className={styles.titulo}>
    <h1>CRIAR CATEGORIA</h1>
    </div>
    <form className={styles.formulario}>
        <div className={styles.campo}>
           <label>Nome Categoria</label>
           <input type="text" placeholder="Insira uma nova categoria" />
         </div>
         <div className={styles.botoes}>
        <button className={styles.botao_salvar}>Salvar</button>
        <button className={styles.botao_cancelar}>Cancelar</button>
        </div>
    </form>
    </main>
    <Footer/>
    </>

  );
};

export default CriarCategoria;
