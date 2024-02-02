import './Botao.css'

const Botao = (props) => {
    return (
        <section className='botao'>

            <button>
                {props.texto}
            </button>

        </section>
    )
}

export default Botao