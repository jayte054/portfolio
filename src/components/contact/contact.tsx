import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import toastify from "toastify-js"
import "./contact.css"
import { BiBorderRadius } from "react-icons/bi"

export const Contact = () => {
    const [user_email, setUserEmail] = useState("")
    const [from_name, setUserName] = useState("")
    const [message, setMessage] = useState("")
    
    const form = useRef<any>()

    const sendMail = (e:React.FormEvent) => {
        e.preventDefault();

    emailjs.sendForm('service_43g7208', 'template_ifqkrrw', form.current, 'Vy9DmAlgi6aijCN_u')
      .then((result) => {
          console.log(result.text);
          setUserName("")
          setUserEmail("")
          setMessage("")
          toastify({
            backgroundColor: "green",
            gravity: "bottom",
            position: "right",
            text:"message sent successfully",
            duration: 3000,
            style :{
                width:"20%",
                height:"1rem",
                textAlign:"center",
                padding: "1rem",
                borderRadius: "1rem",
            }
          }).showToast()
         
      }, (error) => {
          console.log(error.text);
      });
    }

    return (
        <div className="contact-container">
            <h2>Contact Me Directly</h2>
            <div className="contact-input">
                <form ref={form} onSubmit={sendMail}>
                <p>Name</p>
                <input type="text"
                        name="from_name"
                        value={from_name}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="name"
                        className="string"
                />
                <p>Email Address</p>
                <input  type="email"
                        name="user_email"
                        value={user_email}
                        onChange={(e) => setUserEmail(e.target.value)}
                        placeholder = "email"
                        className="string"
                        />
                <p>Message</p>
                <textarea placeholder= "message"
                          name="message"
                          value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="contact-message">
                    </textarea> 
                <br />
                <input className ="button" type="submit" value="Send" />
                </form>
            </div>
        </div>
    )
}