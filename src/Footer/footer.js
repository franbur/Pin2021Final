import "./footer.scss";
import logofooter from "../img/footer-logo.svg";

function Footer(){
    return(    
        <div className="footer">
        <p className="texto-footer">2020 © All rights reserved.</p>
        <img
        src={logofooter}
        // className="image"
        alt="Logo."
        // onClick={this.scrollToTop}
        />
    </div>    
    )
}
 
export default Footer;