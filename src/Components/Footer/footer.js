import React from 'react';
import logofooter from "../../assets/img/footer-logo.svg";

function Footer(params){
    return(    
        <div className="footer">
            <p className="texto-footer">2020 © All rights reserved.</p>
            <img src={logofooter} alt="Logo."/>
        </div>    
    )
}
 
export default Footer;