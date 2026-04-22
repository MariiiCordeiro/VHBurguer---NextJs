import styles from "./footer.module.css"

const Footer = () => {
    return (
        <footer id={styles.footer}>
            <div className={`${styles.container} layout_guide`}>
                <div id={styles.footer_icons}>
    logo_vhburguer_footer}/>                <img src="../imgs/Logo_footer.svg" alt="Logo do VH Burguer que contém como plano de fundo um hamburguer" id={styles.logo} />
    {styles.icons}>                <nav id={styles.redes_sociais}>
                        <a href=""><img className="icone" src="../imgs/tiktok.png" alt="Ícone TikTok" /></a>
                        <a href=""><img className="icone" src="../imgs/face.png" alt="Ícone Facebook" /></a>
                        <a href=""><img className="icone" src="../imgs/insta.png" alt="Ícone Instagram" /></a>
                        <a href=""><img className="icone" src="../imgs/youtube.png" alt="Ícone YouTube" /></a>
                    </nav>
                </div>
            </div>
            <hr id={styles.linha}></hr>
            <p>Copyright © 2026 VH Burguer | Todos os direitos reservados</p>
        </footer>
    )
}

export default Footer; 