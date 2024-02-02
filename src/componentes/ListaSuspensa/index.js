import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    return (
        <div className='listaSuspensa'>

            <label>{props.label}</label>
            <select required={props.obrigatorio} onChange={e => props.aoAlterar(e.target.value)} value={props.valor}>
                
                <option value=""></option>
                {props.itens.map(item => item[1] === true ? <option className='subcategoria' disabled key={item}>{item}</option> : <option key={item}>{item}</option>)}
                
            </select>
   
        </div>

    )
}

export default ListaSuspensa