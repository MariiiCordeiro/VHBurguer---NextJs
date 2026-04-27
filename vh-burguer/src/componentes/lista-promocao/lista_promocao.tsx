import styles from "@/componentes/lista-promocao/lista_promocao.module.css"
import ItemPromocao from "../item-promocao/item-promocao";

const ListaPromocao = () =>{
    return(
 <>
      <div className={`${styles.container} layout_guide`}>
        <div className={styles.cabecalho_tabela}>
          <span>Nome</span>
          <span>Data expiração</span>
          <span>Editar</span>
        </div>
        <ul className={styles.listagem}>
          <li className={styles.lista_item}>
            <ItemPromocao/>
             <ItemPromocao/>
              <ItemPromocao/>
               <ItemPromocao/>
                <ItemPromocao/>
                 <ItemPromocao/>
  
          </li>
        </ul>
      </div>
    </>
    );
};

export default ListaPromocao