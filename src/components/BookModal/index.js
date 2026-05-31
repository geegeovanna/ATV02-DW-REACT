import styles from './BookModal.module.css';

export default function BookModal({ isOpen, livro, onClose }) {
  if (!isOpen || !livro) return null;
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.fundoModal} onClick={handleOverlayClick}>
      <div className={styles.containerModal}>
        
        <button onClick={onClose} className={styles.botaoFechar}>
          ✕
        </button>

        <div className={styles.modal}>
          <div className={styles.capaLivro}>
            {livro.cover_i ? (
              <img src={`https://covers.openlibrary.org/b/id/${livro.cover_i}-L.jpg`} alt={livro.title} className={styles.imagemCapa} />
            ) : (
              <div className={styles.livroSemCapa}>Sem Capa</div>
            )}
          </div>

          <div className={styles.inicioModal}>
            <span className={styles.doc}>Documento Oficial</span>
            <h2 className={styles.tituloLivro}>{livro.title}</h2>
            <p className={styles.tituloSaga}>Throne of Glass Series</p>
            <p className={styles.descricaoSaga}>
              "Guardado nas Crônicas de Erilea, este volume <span style={{ color: '#e67e22', fontStyle: 'italic' }}>{livro.title}</span> narra a jornada de Aelin Galathynius em meio a magia, batalhas e reinos em conflito."
            </p>

            <div className={styles.grid}>
              <div className={styles.informacaoModal}>
                <span className={styles.tituloInformacao}>Autora</span>
                <span className={styles.informacao}>{livro.author_name ? livro.author_name[0] : 'Sarah J. Maas'}</span>
              </div>
              <div className={styles.informacaoModal}>
                <span className={styles.tituloInformacao}>Publicação</span>
                <span className={styles.informacao}>{livro.first_publish_year || '---'}</span>
              </div>
              <div className={styles.informacaoModal}>
                <span className={styles.tituloInformacao}>Volumes</span>
                <span className={styles.informacao}>{livro.edition_count} edições</span>
              </div>
              <div className={styles.informacaoModal}>
                <span className={styles.tituloInformacao}>Idiomas</span>
                <span className={styles.informacao}>{livro.language ? livro.language.join(', ') : 'ENG'}</span>
              </div>
              <div className={`${styles.informacaoModal} ${styles.espacoId}`}>
                <span className={styles.tituloInformacao}>ID do Registro</span>
                <span className={styles.informacaoId}>{livro.key}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}