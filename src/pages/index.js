import { useState, useEffect } from 'react';
import BookCard from '@/components/BookCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookModal from '../components/BookModal';

export default function Home() {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [livroSelecionado, setLivroSelecionado] = useState(null);

  useEffect(() => {
    fetch('https://openlibrary.org/search.json?q=throne+of+glass')
      .then((response) => response.json())
      .then((data) => {
        const livrosIndividuais = data.docs.filter((livro) => {
          const tituloMinusculo = livro.title.toLowerCase();
          
          return (
            !tituloMinusculo.includes('collection') &&
            !tituloMinusculo.includes('box set') &&
            !tituloMinusculo.includes('coloring book') &&
            !tituloMinusculo.includes('bundle') &&
            !tituloMinusculo.includes('/') &&          
            livro.title.length < 60               
          );
        });

        setLivros(livrosIndividuais.slice(0, 8));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar livros:", error);
        setLoading(false);
      });
  }, []);

  return (
  <main style={{ minHeight: '100vh', paddingBottom: '0', backgroundColor: '#fcf9f2' }}>
    <Navbar />

    <section style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      padding: '5rem 4rem 2rem 4rem',
      gap: '4rem',
      maxWidth: '1300px',
      margin: '0 auto'
    }}>
      <div>
        <p style={{ 
          textTransform: 'uppercase', 
          letterSpacing: '0.15em', 
          fontSize: '0.9rem', 
          color: '#a38260',
          margin: '0 0 1rem 0',
          fontFamily: "'Georgia', serif"
        }}>
          Sarah J. Maas
        </p>
        <h1 style={{ 
          fontSize: '4.5rem', 
          lineHeight: '1.1',
          fontWeight: 'normal',
          margin: '0 0 2rem 0',
          color: '#2b1a11',
          fontFamily: "'Georgia', serif"
        }}>
          TRONO <span style={{ fontStyle: 'italic', color: '#e67e22' }}>DE</span> <br /> VIDRO
        </h1>
        <p style={{ 
          fontSize: '1.1rem', 
          lineHeight: '1.6', 
          color: '#5c4a3c',
          maxWidth: '460px',
          margin: '0 0 2.5rem 0',
          fontFamily: "'Georgia', serif"
        }}>
          "Era uma vez, em uma Terra há muito transformada em cinzas uma jovem princesa que amava seu reino."
        </p>
        <a href="#livros" style={{ textDecoration: 'none' }}>
          <button
            onMouseEnter={e => {
              e.target.style.backgroundColor = '#e67e22';
              e.target.style.borderColor = '#e67e22';
              e.target.style.color = '#fcf9f2';
            }}
            onMouseLeave={e => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.borderColor = '#a38260';
              e.target.style.color = '#a38260';
            }}
            style={{
              background: 'transparent',
              border: '1px solid #a38260',
              padding: '1rem 2rem',
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#a38260',
              cursor: 'pointer',
              transition: 'all 0.3s',
              fontFamily: "'Georgia', serif"
            }}
          >
            Começar a Saga →
          </button>
        </a>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img 
          src="/cervo.png" 
          alt="Cervo de Terrasen em Chamas" 
          style={{ 
            width: '100%', 
            maxHeight: '450px', 
            objectFit: 'contain' 
          }}
        />
      </div>
    </section>

    <section id="livros" style={{
      textAlign: 'center',
      marginTop: '6rem',
      marginBottom: '5rem',
      padding: '0 2rem',
      fontFamily: "'Georgia', serif"
    }}>
      <h2 style={{
        fontSize: '2.2rem',
        fontWeight: 'normal',
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        color: '#2b1a11',
        margin: '0 0 2rem 0'
      }}>
        crônicas de erilea
      </h2>

      <div style={{
        width: '80px',
        height: '1px',
        backgroundColor: '#a38260',
        margin: '0 auto'
      }}></div>
    </section>

    <section style={{ 
      maxWidth: '950px', 
      margin: '0 auto', 
      padding: '0 2rem'
    }}>
      {loading ? (
        <p style={{ 
          color: '#a38260', 
          fontStyle: 'italic', 
          fontFamily: "'Georgia', serif", 
          textAlign: 'center' 
        }}>
          Consultando a biblioteca das crônicas de erilea ...
        </p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {livros
            .sort((a, b) => {
              const anoA = a.first_publish_year || 9999;
              const anoB = b.first_publish_year || 9999;
              return anoA - anoB; 
            })
            .map((livro, index) => (
              <BookCard 
                key={livro.key}
                title={livro.title}
                year={livro.first_publish_year}
                author={livro.author_name}
                coverId={livro.cover_i}
                number={index + 1} 
                editions={livro.edition_count}
                onViewDetails={() => setLivroSelecionado(livro)}
              />
            ))
          }
        </div>
      )}
    </section>
    <br />
    <Footer />
    <BookModal 
        isOpen={!!livroSelecionado} 
        livro={livroSelecionado} 
        onClose={() => setLivroSelecionado(null)} 
      />
  </main>
);
}