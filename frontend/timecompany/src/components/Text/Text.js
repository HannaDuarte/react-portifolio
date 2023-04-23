import './Text.css'

const Text = (props) => {
    return(
        <div className = "text">
            <labe>{props.label} </labe>
            <input placeholder= {props.placeholder}/>
        </div>

    )
}

export default Text