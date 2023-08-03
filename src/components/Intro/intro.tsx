import "./intro.css"
import { BiLogoFirebase } from "react-icons/bi"
import {BiLogoPostgresql} from "react-icons/bi"
import {BiLogoMongodb} from "react-icons/bi"
import {BiLogoReact} from "react-icons/bi"
import {BiLogoGithub} from "react-icons/bi"
import {SiNestjs} from "react-icons/si"

export const Intro = () => {
    
    return (
        <div className="intro">
            <div className="intro-container">
            <h2>Hello there,<br /> interested in the services of a full stack developer, <br />
                capable of building scalable software products<br /> with a strong ownership mindset and excellent collaboration skills<br />
                I am your guy.
            </h2>
            </div>
            <div>
            <h2><strong>Contact Information</strong></h2>
                    <div className="contact-details">
                        <div className="intro-list">
                            <ul>
                                <li><strong>Full Name:</strong> Justin Anayo Ewelike</li>
                                <li style={{paddingTop:"1rem"}}><strong>Stack:</strong> NodeJs</li>
                                <li style={{paddingTop: "1rem"}}><strong>Technologies;</strong>  </li> <br />
                                    <li style={{paddingLeft: "1.5rem"}}><strong>Backend:</strong> ExpressJs, NestJs<SiNestjs /></li><br />
                                    <li style={{paddingLeft: "1.5rem"}}><strong>Frotend:</strong> ReactJs<BiLogoReact /></li> <br />
                                    <li style={{paddingLeft: "1.5rem"}}><strong>Version Control:</strong> Github<BiLogoGithub /></li> <br />
                                    <li style={{paddingLeft: "1.5rem"}}><strong>Database:</strong> Mongodb<BiLogoMongodb />, Postgres<BiLogoPostgresql /></li> <br />
                                    <li style={{paddingLeft: "1.5rem"}}><strong>Third Party Apps:</strong> Firebase <BiLogoFirebase style={{fontSize : "1.5rem"}}/> </li> <br />
                                <li><strong>Email:</strong> ewelikejustin@gmail.com</li>
                            </ul>
                        </div>
                        <div>
                           <span> <img src = "https://media.licdn.com/dms/image/D4D03AQEvQbTlkyfa8w/profile-displayphoto-shrink_200_200/0/1690989476578?e=1696464000&v=beta&t=I9tvgMAEeCvZ5PFdLGQL0sR_nm5Uda-ejGtEx_BLR6o" alt="justin's pic" /> </span>
                           <li style={{paddingTop:"1rem", listStyleType: "none"}}><strong>Phone Number:</strong> +2348134490566</li>
                                <li style={{paddingTop:"1rem", listStyleType: "none"}}><strong>Linkedin:</strong> <a href="https://www.linkedin.com/in/justin-ewelike-445156a7/">Justin's Linkedin</a></li>
                                <li style={{paddingTop:"1rem", listStyleType: "none"}}><strong>Github:</strong> <a href="https://github.com/jayte054"> Justin's Github</a></li>
                        </div>
                    </div>
            </div>
        </div>
    )
}