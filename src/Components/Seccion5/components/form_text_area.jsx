
function TextArea (props) {
    return (
        <>
            <label htmlFor={props.id} >{props.text}</label>
            <textarea onChange={props.handler} name={props.id} id={props.id} cols="30" rows="10" 
            className="formulario__textarea" value={props.value} required></textarea>
        </>
    )
}

export default TextArea;