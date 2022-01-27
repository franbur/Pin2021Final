import React from 'react';

function Button(props){
    return (
        <button disabled={props.disabled} onClick={props.handler} className="button-cinco formulario_btn">{props.text}</button>
    );
}

export default Button;