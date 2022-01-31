
function TextArea (props) {
    return (
        <div className="form_section">
            <label className='labelformularios' htmlFor={props.id} >{props.text}</label>
            <textarea onChange={props.handler} name={props.id} id={props.id} cols="30" rows="10" 
            className="formulario__textarea" value={props.value} required></textarea>
        </div>
    )
}

export default TextArea;