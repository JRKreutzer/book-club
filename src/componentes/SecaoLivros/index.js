import Livro from '../Livro'
import './SecaoLivros.css'

const SecaoLivros = (props) => {
    return (
        <section className='secaoLivros' style={{backgroundColor: props.corPrimaria, boxShadow: props.corFundo}}>

            <h3 style={{ borderBottomColor: props.corSecundaria, color: props.corSecundaria, WebkitTextStroke: '0.5px #fff'}}>{props.nome}</h3>
            <div className='livros'>

                {props.livros.map(livro => <Livro
                    key={livro.nomeLivro}
                    nome={livro.nomeLivro}
                    imagem={livro.imagemLivro}
                    pagina={livro.paginasLivro}
                    sinopse={livro.sinopseLivro}
                    autor={livro.nomeAutor}
                    categoria={livro.categoriaLivro}
                    editora={livro.editoraLivro}
                />)}

            </div>

        </section>
    )
}

export default SecaoLivros