import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoArea}>
        <img src="/cervo.png" alt="Logo Cervo" className={styles.logoIcon} />
        <span className={styles.logoText}>Erilea · Crônicas</span>
      </div>
      <div className={styles.menuArea}>
        <a href="#livros" className={styles.navLink}>
          Livros
        </a>
      </div>
    </nav>
  );
}