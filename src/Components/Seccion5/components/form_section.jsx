import React from 'react';

function FormSection (props){
    return (
        <div>
            <label className='labelformularios' htmlFor={props.id}>{props.text}</label>
            <input  type={props.type} onChange={props.handler} placeholder={props.placeholder}
            name={props.id} className="formulario__input-txt texto-placeholder" value={props.value} required/>
        </div>
    )
}

export default FormSection;