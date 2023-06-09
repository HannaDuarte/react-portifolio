import './ListChoice.css'


const ListChoice = (props) => {
    return(

        <div className= "list">
            <label>{props.label}</label>
            <select>
                {
                    props.itens.map(item => {
                        return <option key= {item}>{item}</option>
                    })
                }
                </select>
        </div>
    )
}

export default ListChoice