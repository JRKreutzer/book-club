import './CampoTexto.css'

const CampoTexto = (props) => {

    const aoDigitar = (e) => {
        props.aoAlterar(e.target.value)
    }
    

    return (
        <div className='campoTexto'>

            <label>{props.label}</label>
            <input required={props.obrigatorio} value={props.valor} onChange={aoDigitar} placeholder={props.placeholder}/>

        </div>
    )
}

export default CampoTexto