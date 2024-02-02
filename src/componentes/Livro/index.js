import './Livro.css'

const Livro = (props) => {
    return (
        <div className='livro'>

            <div className='livroImagem'>

                <img src={props.imagem} alt={props.nome}/>
                <h4><span className='titulo'>Título: </span><br />{props.nome}</h4>
                <h4><span className='titulo'>Autor: </span><br />{props.autor}</h4>

                <h4><span className='titulo'>Páginas: </span>{props.pagina}</h4>
                <h4> <span className='titulo'>Sinopse: </span><br /><br />{props.sinopse}</h4>
                <h4>{props.categoria}</h4>
                <h4><span className='titulo'>Editora: </span><br />{props.editora}</h4>

            </div>

        </div>
    )
}

export default Livro