import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Want to connect, Just drop me a message in one click! </p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:anujkhandelwal2001@gmail.com"><img src={emailIcon} alt="Email" /></a>
          <a href="mailto:anujkhandelwal2001@gmail.com">anujkhandelwal2001@gmail.com</a>
        </div>
        <div>
        <a href="tel:+919414333018"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919414333018">(+91) 9414333018</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}