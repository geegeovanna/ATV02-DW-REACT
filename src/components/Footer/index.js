import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerFooter}>
        <div className={styles.topoFooter}>
          <div className={styles.areaLogo}>
            <div className={styles.ornamento}>
              <div className={styles.pontoDourado}></div>
              <div className={styles.ornamentoLinha}></div>
            </div>
            <span className={styles.logoFooter}>Crônicas de Erilea</span>
            <p className={styles.frase}>"Meu nome é Aelin Ashryver Galathynius. E eu não terei medo."</p>
          </div>

          <div className={styles.ladoDireito}>
            <nav className={styles.linkLivros}>
              <a href="#livros" className={styles.acervo}>Acervo</a>
            </nav>
          </div>
        </div>

        <div className={styles.divisao}>
          <div className={styles.linhaDivisoria}></div>
          <div className={styles.areaPontos}>
            <div className={styles.ponto}></div>
            <div className={styles.pontoDourado}></div>
            <div className={styles.ponto}></div>
          </div>
          <div className={styles.linhaDivisoria}></div>
        </div>

        <div className={styles.rodape}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Crônicas de Erilea. Todos os direitos reservados.
          </p>
          <p className={styles.creditos}>
            Inspirado no universo de Sarah J. Maas
          </p>
        </div>

      </div>
    </footer>
  );
}