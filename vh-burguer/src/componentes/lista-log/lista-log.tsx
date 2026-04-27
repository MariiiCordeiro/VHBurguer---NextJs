import styles from "@/componentes/lista-log/lista-log.module.css";
import ItemLog from "../item-log/item_log";

const ListaLog = () => {
  return (
    <>
      <div className={`${styles.container} layout_guide`}>
        <div className={styles.cabecalho_tabela}>
          <span>Data Alteração</span>
          <span>Nome Anterior</span>
          <span>Preço Anterior</span>
        </div>
        <ul className={styles.listagem}>
          <li className={styles.lista_item}>
            <ItemLog />
            <ItemLog />
            <ItemLog />
            <ItemLog />
            <ItemLog />
            <ItemLog />
          </li>
        </ul>
      </div>
    </>
  );
};

export default ListaLog;
