import { useEffect, useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import SecaoLivros from "./componentes/SecaoLivros";
import Rodape from "./componentes/Rodape";


function App() {

  const categorias = [
    {
      categoria: 'Ficção:',
      teste: true
    },
    {
      categoria: 'Romance',
      teste: false
    },
    {
      categoria: 'Ficção Científica',
      teste: false
    },
    {
      categoria: 'Fantasia',
      teste: false
    },
    {
      categoria: 'Mistério/Thriller',
      teste: false
    },
    {
      categoria: 'Aventura',
      teste: false
    },
    {
      categoria: 'Horror',
      teste: false
    },
    {
      categoria: 'Histórico',
      teste: false
    },
    {
      categoria: 'Não Ficção:',
      teste: true
    },
    {
      categoria: 'Biografia',
      teste: false
    },
    {
      categoria: 'Autobiografia',
      teste: false
    },
    {
      categoria: 'Memórias',
      teste: false
    },
    {
      categoria: 'Ensaios',
      teste: false
    },
    {
      categoria: 'Jornalismo',
      teste: false
    },
    {
      categoria: 'História',
      teste: false
    },
    {
      categoria: 'Ciência',
      teste: false
    },
    {
      categoria: 'Psicologia',
      teste: false
    },
    {
      categoria: 'Poesia:',
      teste: true
    },
    {
      categoria: 'Filosofia',
      teste: false
    },
    {
      categoria: 'Poesia Contemporânea',
      teste: false
    },
    {
      categoria: 'Poesia Clássica',
      teste: false
    },
    {
      categoria: 'Haicais',
      teste: false
    },
    {
      categoria: 'Épica',
      teste: false
    },
    {
      categoria: 'Drama:',
      teste: true
    },
    {
      categoria: 'Teatro',
      teste: false
    },
    {
      categoria: 'Dramaturgia',
      teste: false
    },
    {
      categoria: 'Quadrinhos/Graphic Novels/Mangás:',
      teste: true
    },
    {
      categoria: 'Super-Heróis',
      teste: false
    },
    {
      categoria: 'Quadrinhos Independentes',
      teste: false
    },
    {
      categoria: 'Mangás',
      teste: false
    },
    {
      categoria: 'Religião e Espiritualidade:',
      teste: true
    },
    {
      categoria: 'Cristianismo',
      teste: false
    },
    {
      categoria: 'Islamismo',
      teste: false
    },
    {
      categoria: 'Budismo',
      teste: false
    },
    {
      categoria: 'Espiritismo',
      teste: false
    },
    {
      categoria: 'Livros Infantis e Infantojuvenis:',
      teste: true
    },
    {
      categoria: 'Contos de Fadas',
      teste: false
    },
    {
      categoria: 'Livros Ilustrados',
      teste: false
    },
    {
      categoria: 'Literatura Infantojuvenil',
      teste: false
    },
    {
      categoria: 'Esportes e Lazer:',
      teste: true
    },
    {
      categoria: 'Biografias de Atletas',
      teste: false
    },
    {
      categoria: 'História dos Esportes',
      teste: false
    }
  ]

  const status = [
    {
      situacao: 'Em Leitura',
      primaryColor: '#bbecfb',
      secundaryColor: '#37c1eb',
      corFundo: '5px 5px 15px rgba(55, 193, 235, 1)'

    },
    {
      situacao: 'Concluído',
      primaryColor: '#f6aca2',
      secundaryColor: '#ee6352',
      corFundo: '5px 5px 15px rgba(238, 99, 82, 1)'
    },
    {
      situacao: 'Aguardando Leitura',
      primaryColor: '#bbecfb',
      secundaryColor: '#37c1eb',
      corFundo: '5px 5px 15px rgba(55, 193, 235, 1)'
    },
    {
      situacao: 'Releitura Planejada',
      primaryColor: '#f6aca2',
      secundaryColor: '#ee6352',
      corFundo: '5px 5px 15px rgba(238, 99, 82, 1)'
    }
  ]

  const editoras = [
    {
      nome: 'Companhia das Letras'
    },
    {
      nome: 'Editora Record'
    },
    {
      nome: 'Editora Intrínseca'
    },
    {
      nome: 'Editora Sextante'
    },
    {
      nome: 'Grupo Editorial Record'
    },
    {
      nome: 'Porto Editora'
    },
    {
      nome: 'Leya'
    },
    {
      nome: 'Guerra e Paz Editores'
    },
    {
      nome: 'Editora Clube do Autor'
    },
    {
      nome: 'Random House'
    },
    {
      nome: 'HarperCollins'
    },
    {
      nome: 'Simon & Schuster'
    },
    {
      nome: 'Penguin Random House'
    },
    {
      nome: 'Hachette Book Group'
    },
    {
      nome: 'Penguin Books'
    },
    {
      nome: 'Oxford University Press'
    },
    {
      nome: 'Bloomsbury'
    },
    {
      nome: 'Faber and Faber'
    },
    {
      nome: 'Macmillan Publishers'
    },
    {
      nome: 'Gallimard'
    },
    {
      nome: 'Éditions du Seuil'
    },
    {
      nome: 'Hachette Livre'
    },
    {
      nome: 'Flammarion'
    },
    {
      nome: 'Suhrkamp Verlag'
    },
    {
      nome: 'Rowohlt Verlag'
    },
    {
      nome: 'Fischer Verlag'
    },
    {
      nome: 'Piper Verlag'
    },
    {
      nome: 'Editorial Planeta'
    },
    {
      nome: 'Anagrama'
    },
    {
      nome: 'Santillana'
    },
    {
      nome: 'Ediciones Siruela'
    },
    {
      nome: 'Mondadori'
    },
    {
      nome: 'Einaudi'
    },
    {
      nome: 'Feltrinelli'
    },
    {
      nome: 'Rizzoli'
    },
    {
      nome: 'Kodansha'
    },
    {
      nome: 'Shueisha'
    },
    {
      nome: 'Shogakukan'
    },
    {
      nome: 'Kadokawa'
    },
    {
      nome: 'China Publishing Group'
    },
    {
      nome: 'CITIC Press Group'
    },
    {
      nome: "People's Literature Publishing House"
    },
    {
      nome: 'Phoenix Publishing & Media'
    }
  ]

  const [livros, setLivros] = useState([])
  
  useEffect(() => {
    const livrosGuardados = JSON.parse(localStorage.getItem('livros')) || []
    setLivros(livrosGuardados)
  }, [setLivros])
  
  const novoLivroAdicionado = (livro) => {
    const livroAdicionado = [...livros, livro]
    setLivros(livroAdicionado)
    localStorage.setItem('livros', JSON.stringify(livroAdicionado))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario categorias={categorias.map(item => [item.categoria, item.teste])} status={status.map(item => item.situacao)} editoras={editoras.map(item => item.nome)} aoLivroCadastrado={livro => novoLivroAdicionado(livro)}/>
      {status.map(item => <SecaoLivros
        key={item.situacao} 
        nome={item.situacao}
        corPrimaria={item.primaryColor}
        corSecundaria={item.secundaryColor}
        corFundo={item.corFundo}
        livros={livros.filter(livro => livro.situacaoLivro === item.situacao)}
      />
      )}
      <Rodape />
    </div>
  );
}

export default App;
