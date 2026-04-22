import Header from "@/componentes/header/header";
import Footer from "@/componentes/footer/footer";
import styles from "./home.module.css";
import ListaProduto from "@/componentes/lista-produto/lista-produto";
import CardProduto from "@/componentes/card-produto/card-produto";


const Home = () => {
    return (
        <>
            <Header />
            <main id={styles.main}>
                <section id={styles.banner}>
                    <h1>BEM-VINDO AO VH BURGUER</h1>
                    <img src="../imgs/foto_de_hamburgueres.png" alt="Foto de três hamburgueres" />
                    <div id={styles.botoes_banner}>
                        <button id={styles.btn_chamar}>Chamar Atendente</button>
                        <a id={styles.ver_cardapio} href="">Ver Cardápio</a>
                    </div>
                </section>
                <section id={styles.destaques}>
                    <article id={styles.mais_pedidos}>
                        <figure>
                            <img src="../imgs/mais_pedidos.png" alt="Foto de um hamburguer com acompanhamentos" />
                            <figcaption id={styles.legenda}>Os mais queridinhos da galera </figcaption>
                            <figcaption id={styles.legenda_destacada}> MAIS PEDIDOS</figcaption>
                        </figure>
                        {/* <figcaption className="legenda_foto_destacada">MAIS PEDIDOS</figcaption> */}
                    </article>
                    <div id={styles.conteudo_destaque_img}>
                        <article className={styles.imagem_ilustrativa}>
                            <figure>
                                <img src="../imgs/muito_bacon.png" alt="Foto de um hamburguer com acompanhamentos" />
                                <figcaption className={styles.legenda_foto}>Lanches com</figcaption>
                                <figcaption className={styles.legenda_foto_destacada}>MUITO BACON</figcaption>
                            </figure>
                        </article>
                        <article className={styles.imagem_ilustrativa}>
                            <figure>
                                <img src="../imgs/super_combos.png" alt="Foto de um hamburguer com acompanhamentos" />
                                <figcaption className={styles.legenda_foto_inferior}>Lanches com</figcaption>
                                <figcaption className={styles.legenda_foto_destacada_inferior}>MUITO BACON</figcaption>
                            </figure>
                        </article>
                    </div>
                </section>
                <section id={styles.cardapio}>
                    <h2>CARDÁPIO</h2>
                    <ListaProduto/>
                </section>
                {/* <section id={styles.unidades}>
                    <div className={`${styles.container} layout_guide`}>
                        <div id={styles.conteudo}>
                            <figure>
                                <img src="../imgs/unidade.jpeg" alt="Interior da unidade da franquia" />
                            </figure>
                            <div id={styles.endereco_unidade}>
                                <h2>Nossas unidades</h2>
                                <ul>
                                    <li>Centro - Av. Aurora, 742</li>
                                    <li>Jardim - Av. das Palmeiras, 1280</li>
                                    <li>Norte - Av. Horizonte, 305</li>
                                    <li>Sul - Av. Nova Esperança, 910</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section> */}
            </main >
            {/* <Footer/> */}
        </>
    )

    /*banner
    /*destaques
    /*cardapio*/
    //h1 cardapio
    //chamar componente da lista
    // unidades
}

export default Home;