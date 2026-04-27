import styles from "@/componentes/item-log/item_log.module.css"
const ItemLog = () => {
  return (
    <>
      <article className={styles.item}>
        <time dateTime="2012-12-12" className={styles.data_alteracao}>12/12/12</time>
        <span className={styles.produto}>Monstro</span>
        <span className={styles.valor_produto}>R$55,00</span>
      </article>
    </>
  );
};

export default ItemLog;