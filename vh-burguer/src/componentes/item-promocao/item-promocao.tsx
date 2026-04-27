import styles from "@/componentes/item-promocao/item.promocao.module.css";

const ItemPromocao = () => {
  return (
    <>
      <article className={styles.item}>
        <span className={styles.promocao}>Monstro</span>
        <time dateTime="2012-12-12" className={styles.data_expiracao}>
          12/12/12
        </time>
        <a href="" className={styles.editar}>
          <img
            className={styles.icone_informacao}
            src="../imgs/icone-informacao.svg"
            alt="Ícone de informação para ir para página edição"
          />
        </a>
      </article>
    </>
  );
};

export default ItemPromocao;
