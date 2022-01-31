import {useState, useEffect} from "react";


import Button from './components/button.jsx';
import FormSection from './components/form_section.jsx';
import TextArea from './components/form_text_area.jsx';

import Alert from "./components/alert.jsx";
import image from '../../assets/img/imagen1.png';

const axios = require('axios');

function mailValidator(mail){
    mail = mail.split ("@");
  
    if (mail.length === 2){
      mail = mail[1].split(".");
      if (mail.length>=2 && mail[0] && mail[1] && mail[0].length>1 && mail[1].length >= 2){
          return true;
      } else {
        return false;
      }
    
    }else {
      return false;
    }
  }

export function Seccion5(){

    const [type, setType] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const [data, setData] = useState({"name":"", "email":"", "phone":"", "message":""});

    // Con este use effect las alertas desaparecen después de 7.5 segudos
    useEffect(()=>{
        if (type !== 0){
          setTimeout(()=>setType(0), 7500);
        }
      }, [type])

    function handleData (event) {
        // Si hay una alerta puesta y ejecuta esta función la alerta desaparece
        if (type !== 0){
            setType(0);
        }
        let new_data = {...data}
        new_data[event.target.name] = event.target.value;
        setData(new_data);
    }

    function handleSend (event) {
        event.preventDefault();

        if (data.name && data.message && data.email && data.phone && mailValidator(data.email)){
            setDisabled(true);
            axios.post(
                "https://grupo1-backend.herokuapp.com/api/post",data
            ).then(res=>{
                setType(res.data.status);
                setData ({"name":"", "email":"", "phone":"", "message":""});
                setDisabled(false);
            }).catch(()=>{
                setDisabled(false);
                setType(505);
            });
        } else {
            setType(1);
        }
    }


    return(    
    <div id="seccion5" className ="contenedor-cinco">
        <div className="titulos-cinco">
            <h3 className="titulo1">Get in touch</h3>
            <h3 className="titulo2">We are hiring!</h3>
            <Alert type={type}/>
            <form action="" method="post" className="formulario">
                <FormSection text="Name"  type="text" placeholder="Enter your name" id="name" handler={handleData} value={data.name}/>
                <FormSection text="Email" type="email" placeholder="name@example.com" id="email" handler={handleData} value={data.email}/>
                <FormSection text="Phone" type="tel" placeholder="Number and area's code" id="phone" handler={handleData} value={data.phone}/>
                <TextArea text="Message" id="message" handler={handleData} value={data.message}/>

                <Button text="Send" handler={handleSend} disabled={disabled}/>
            </form>
        </div>

        <img className="img" src={image} alt="Imagen de globo aeroestático" />

    </div>
    )
}

/* 
        <div className="img-section">
            { <div className="imagen-cinco"></div> }
            
            </div>
*/