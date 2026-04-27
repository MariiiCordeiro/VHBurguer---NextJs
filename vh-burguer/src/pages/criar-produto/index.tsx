import SubHeader from "@/componentes/sub-header/sub_header";
import styles from "./criar-produto.module.css";
import Footer from "@/componentes/footer/footer";

const CriarProduto = () => {
  return (
    <>
      <SubHeader />
      <main className={styles.main}>
        <h1>CRIAR PRODUTO</h1>

        <form className={styles.formulario}>
        <div className={styles.campo}>
          <label>Nome do produto</label>
          <input type="text" placeholder="Digite o nome do produto" />
        </div>

        <div className={styles.campo}>
          <label>Descrição</label>
          <textarea placeholder="Escreva a descrição do produto" />
        </div>

        <div className={styles.campo}>
          <label>Preço (R$)</label>
          <input type="text" placeholder="Digite o preço do produto" />
        </div>

        <div className={styles.campo}>
          <label>Categoria</label>
          <select className={styles.selecionar_categoria}>
            <option>Selecione a categoria</option>
            <option>Premium</option>
            <option>Artesanal</option>
            <option>Gourmet</option>
            <option>Tradicional</option>
            <option>Vegano</option>
             <option>Vegetariano</option>
          </select>
          <span className={styles.adicionar_categoria}>
            Adicionar categoria
          </span>
        </div>

        <div className={styles.campo}>
          <label>Promoção</label>
          <select>
            <option>Selecione a promoção</option>
            <option>Sem Promoção</option>
            <option>Natal</option>
            <option>Dia das Crianças</option>
            <option>Leve Dois Pague Um</option>
          </select>
          <a href=""></a>
          <a className={styles.adicionar_promocao}>
            Adicionar promoção
          </a>
        </div>

        <div className={styles.campo}>
          <label>URL da imagem</label>
          <input type="text" placeholder="Cole a URL da imagem" />
        </div>

        <div className={styles.botoes}>
        <button className={styles.botao_promocao}>Adicionar Promoção</button>
        <button className={styles.botao_salvar}>Salvar</button>
        </div>
      </form>

      </main>
      <Footer />
    </>
  );
};

export default CriarProduto;
