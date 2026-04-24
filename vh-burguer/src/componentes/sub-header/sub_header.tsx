import styles from "./sub-header.module.css"

const SubHeader = () => {
    return (
        <header id={styles.header}>
            <div className={`${styles.container} layout_guide`}>
                <img src="../imgs/Logo_footer.svg" alt="Logo do VH Burguer que contém como plano de fundo um hamburguer" id={styles.logo}/>
                <nav id={styles.nav_menu}>
                    <a href="">Voltar</a>
                </nav>
            </div>
        </header>
    )
}

export default SubHeader;