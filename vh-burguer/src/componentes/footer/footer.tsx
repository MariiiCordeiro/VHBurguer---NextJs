import styles from "./footer.module.css";

const Footer = () => {
  return (
    // <footer id={styles.footer}>
    //     <dialog></dialog>
    //   <div className={`${styles.containe_footerr} layout_guide`}>
    //     <div id={styles.footer_icons}>
    //       <img
    //         src="../imgs/Logo_footer.svg"
    //         alt="Logo do VH Burguer que contém como plano de fundo um hamburguer"
    //         id={styles.logo}
    //       />
    //       <nav id={styles.redes_sociais}>
    //         <a href="">
    //           <img
    //             className="icone"
    //             src="../imgs/tiktok.png"
    //             alt="Ícone TikTok"
    //           />
    //         </a>
    //         <a href="">
    //           <img
    //             className="icone"
    //             src="../imgs/face.png"
    //             alt="Ícone Facebook"
    //           />
    //         </a>
    //         <a href="">
    //           <img
    //             className="icone"
    //             src="../imgs/insta.png"
    //             alt="Ícone Instagram"
    //           />
    //         </a>
    //         <a href="">
    //           <img
    //             className="icone"
    //             src="../imgs/youtube.png"
    //             alt="Ícone YouTube"
    //           />
    //         </a>
    //       </nav>
    //     </div>
    //   </div>
    //   <hr id={styles.linha}></hr>
    //   <p>Copyright © 2026 VH Burguer | Todos os direitos reservados</p>
    // </footer>

    <footer id={styles.footer_home}>
            <div className={`${styles.container} layout_guide`}>
                <div id={styles.footer_icons}>
                    <img src="../imgs/Logo_footer.svg" alt="Logo do VH Burguer que contém como plano de fundo um hamburguer"
                        className={styles.logo_vhburguer_footer}/>
                    <nav id={styles.icons}>
                        <a href="">
                            <img src="../imgs/tiktok.png" alt="Logo da rede social Tiktok" />
                        </a>
                        <a href="">
                            <img src="../imgs/face.png" alt="Logo da rede social Facebook" />
                        </a>
                        <a href="">
                            <img src="../imgs/insta.png" alt="Logo da rede social Instagram" />
                        </a>
                        <a href="">
                            <img src="../imgs/youtube.png" alt="Logo do Youtube" />
                        </a>
                    </nav>
                </div>
                <hr id={styles.linha}></hr>
                <p>Copyright © 2026 VH Burguer | Todos os direitos reservados</p>
            </div>
        </footer>
  );
};

export default Footer;
