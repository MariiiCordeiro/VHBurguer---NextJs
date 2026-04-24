import SubHeader from "@/componentes/sub-header/sub_header";
import Footer from "@/componentes/footer/footer";
import styles from "@/pages/produto/detalhes_produto.module.css";


const DetalheProduto = () => {
    return (
        <>
            <SubHeader />
            <main className={`${styles.main} layout_guide`}>
                <article className={styles.detalhes_produto}>
                    <h1>DETALHES DO X-BACON</h1>
                    <img src="../imgs/hamburguer_alcatra_com-bacon.png" alt="Foto ampliada do produto" />
                    <div className={styles.informacao_produto}>
                        <div className={styles.descricao}>
                            <h2>Descrição</h2>
                            <p>Um pão brioche macio segura a fera: duas (ou três) carnes altas e suculentas, queijo cheddar derretido escorrendo pelas laterais, bacon crocante, cebola caramelizada no ponto adocicado, alface fresca, tomate e um molho especial intenso que amarra tudo. Para completar o ataque, uma camada extra de onion rings ou molho defumado que transforma cada mordida numa explosão.</p>
                        </div>
                        <div className={styles.preco_classificacao}>
                            <div className={styles.preco_produto}>
                                <h2>Preço</h2>
                                <div className={styles.valor}>
                                    <p><del>R$45,00</del></p>
                                    <p>R$35,00</p>
                                </div>
                            </div>
                            <div>
                                <h2>Categoria</h2>
                                <ul>
                                    <li>Premium</li>
                                    <li>Artesanal</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    )
}

export default DetalheProduto;