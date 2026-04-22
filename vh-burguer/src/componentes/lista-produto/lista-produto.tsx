import CardProduto from "../card-produto/card-produto";
import styles from "./lista-produto.module.css"

const ListaProduto = () => {
    return (
        <>
            <div className={`${styles.container} layout_guide`}>
                <div id={styles.botoes}>
                    <div>
                        <button id={styles.filtrar}>Filtrar<img src="../imgs/filtrar.svg" alt="" /></button>
                    </div>
                    <div id={styles.edicao}>
                        <button id={styles.promocao}>Todas as promoções</button>
                        <button id={styles.adicionar}>Adicionar Produto</button>
                    </div>
                </div>
                <div id={styles.catalogo}>

                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
                </div>
            </div>
        </>
    )
}

export default ListaProduto;