import styles from "./card-produto.module.css"

const CardProduto = () =>{
    return(
        <>
        <article className={styles.card}>
            <figure className={styles.imagem_card}>
            <img className={styles.imagem_card} src="../imgs/hamburguer_alcatra_com-bacon.png" alt="Foto ilustrativa de um hamburguer de de alcatra com bacon" />
            <figcaption className={styles.titulo_produto}><h3>Monster</h3></figcaption>
            </figure>
            <p className={styles.descricao}>Hambúrguer brutal, suculento e exageradamente saboroso.</p>
            <div className={styles.alteracao}>
                <div className={styles.preco}>
                <p>R$ 35,00</p>
                </div>
                <div className={styles.icones}>
                <img className={styles.icone_card} src="../imgs/info.svg" alt="Ícone de informação" />
                <img className={styles.icone_card} src="../imgs/editar.svg" alt="Ícone de edição" />
                <img className={styles.icone_card} src="../imgs/trash.svg" alt="Ícone de lixo para excluir o card de produto" />
                </div>
            </div>
        </article>
        </>
    )
}

export default CardProduto;
