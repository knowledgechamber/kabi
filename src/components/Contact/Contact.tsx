import { Container } from "./styles";
import emailIcon from "../../assets/mail-ico.png";
import phoneIcon from "../../assets/phone-ico.png"


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:kabi.kabila.171@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:kabi.kabila.171@gmail.com">kabi.kabila.171@gmail.com</a>
        </div>
        <div>
        <a href="tel:+919629244559"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919629244559">(+91) 9629244559</a>
        </div>  
      </div>
    </Container>
  )
}