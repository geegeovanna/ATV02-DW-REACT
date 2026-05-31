import styles from './BookCard.module.css';

export default function BookCard({ title, year, author, coverId, onViewDetails, number, editions }) {
  const coverUrl = coverId 
    ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg` 
    : null;

  return (
    <div className={styles.containerCard}>
      <div className={styles.areaLivro}>
        {coverUrl ? (
          <img src={coverUrl} alt={`Capa de ${title}`} className={styles.imagemCapa} />
        ) : (
          <div className={styles.areaLivroSemCapa}>
            <span className={styles.autorLivroSemCapa}>{author?.[0]}</span>
            <span className={styles.tituloLivroSemCapa}>{title}</span>
            <span className={styles.anoLivroSemCapa}>{year}</span>
          </div>
        )}
      </div>

      <div className={styles.areaExibirLivro}>
        <span className={styles.infoTopo}>
          Livro {number || '1'}  ·  {year}
        </span>
        
        <h3 className={styles.tituloLivro}>
          {title}
        </h3>

        <span className={styles.tituloSaga}>
          Throne of Glass Series
        </span>
        
        <p className={styles.descricaoUniverso}>
          Nas entranhas de Erílea, segredos ancestrais e impérios forjados em chamas aguardam aqueles que ousam desafiar o destino. Um registro oficial que detalha as crônicas, batalhas e alianças que moldaram o futuro do trono.
        </p>

        <div className={styles.linhaRodape}>
          {editions && (
            <span className={styles.rotuloEdicoes}><span>{editions} EDIÇÕES</span></span>
          )}
          
          <button className={styles.botaoDetalhes} onClick={onViewDetails}>
            DETALHES
          </button>
        </div>
      </div>
    </div>
  );
}