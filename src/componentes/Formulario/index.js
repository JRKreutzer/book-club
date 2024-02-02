import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nomeLivro, setNomeLivro] = useState('')
    const [imagemLivro, setImagemLivro] = useState('')
    const [paginasLivro, setPaginasLivro] = useState('')
    const [sinopseLivro, setSinopseLivro] = useState('')
    const [nomeAutor, setNomeAutor] = useState('')
    const [categoriaLivro, setCategoriaLivro] = useState('')
    const [situacaoLivro, setSituacaoLivro] = useState('')
    const [editoraLivro, setEditoraLivro] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault()
        
        props.aoLivroCadastrado(
            {
                nomeLivro,
                imagemLivro,
                paginasLivro,
                sinopseLivro,
                nomeAutor,
                categoriaLivro,
                situacaoLivro,
                editoraLivro
            })
            setNomeLivro('')
            setImagemLivro('')
            setPaginasLivro('')
            setSinopseLivro('')
            setNomeAutor('')
            setCategoriaLivro('')
            setSituacaoLivro('')
            setEditoraLivro('')
    }

    return (
        <section className='formulario'>
            
            <form onSubmit={aoSalvar}>

                <h2>Preencha os dados para criar o card do Livro</h2>
                <CampoTexto
                    obrigatorio={true}  
                    label='Nome do livro:' 
                    placeholder='Digite o nome do livro'
                    valor={nomeLivro}
                    aoAlterar={valor => setNomeLivro(valor)}
                />
                <CampoTexto
                    obrigatorio={true} 
                    label='Imagem do livro:' 
                    placeholder='Digite o endereço da imagem'
                    valor={imagemLivro}
                    aoAlterar={valor => setImagemLivro(valor)}
                />
                <CampoTexto 
                    obrigatorio={true}
                    label='Quantidade de páginas:' 
                    placeholder='Digite a quantidade de páginas'
                    valor={paginasLivro}
                    aoAlterar={valor => setPaginasLivro(valor)}
                />
                <CampoTexto 
                    obrigatorio={true}
                    label='Sinopse:' 
                    placeholder='Digite a sinopse do livro'
                    valor={sinopseLivro}
                    aoAlterar={valor => setSinopseLivro(valor)}
                />
                <CampoTexto 
                    obrigatorio={true}
                    label='Nome do autor:' 
                    placeholder='Digite o nome do autor'
                    valor={nomeAutor}
                    aoAlterar={valor => setNomeAutor(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label='Categoria' 
                    itens={props.categorias} 
                    valor={categoriaLivro}
                    aoAlterar={valor => setCategoriaLivro(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label='Situação' 
                    itens={props.status} 
                    valor={situacaoLivro}
                    aoAlterar={valor => setSituacaoLivro(valor)}

                />
                <ListaSuspensa
                    obrigatorio={true}
                    label='Editora' 
                    itens={props.editoras} 
                    valor={editoraLivro}
                    aoAlterar={valor => setEditoraLivro(valor)}
                />
                <Botao texto='Criar Card'/>
    
            
            </form>

        </section>
    )
}

export default Formulario