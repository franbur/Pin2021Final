import React from 'react';

function FormSection (props){
    return (
        <div className="form_section">
            <label className='labelformularios' htmlFor={props.id}>{props.text}</label>
            <input  type={props.type} onChange={props.handler} placeholder={props.placeholder}
            name={props.id} className="texto-placeholder" value={props.value} required/>
        </div>
    )
}

export default FormSection;