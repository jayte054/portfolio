import "./intro.css"
import { BiLogoFirebase } from "react-icons/bi"
import {BiLogoPostgresql} from "react-icons/bi"
import {BiLogoMongodb} from "react-icons/bi"
import {BiLogoReact} from "react-icons/bi"
import {BiLogoGithub} from "react-icons/bi"
import {TbBrandJavascript} from "react-icons/tb"
import {SiNestjs} from "react-icons/si"
import { SiGraphql, SiSentry } from "react-icons/si";
import pic from "../../images/Screenshot 2023-08-02 at 16.30.57.png"

export const Intro = () => {

    const resume =
      "https://drive.google.com/file/d/142Tn4fNbAWc8ESfnIAIdHz3YlIHMd6zG/view";

    const downloadFile = (url: string | undefined | any) => {
        const filename = url.split("/").pop()
        const aTag = document.createElement("a")
        aTag.href = url
        aTag.setAttribute("download", filename)
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }
    
    return (
        <div className="intro">
            <div className="intro-container">
            <h2 style={{textAlign: "center", color: "white"}}>Hello there,<br /> interested in the services of a full stack developer, <br />
                capable of building scalable software products<br /> with a strong ownership mindset and excellent collaboration skills<br />
                look no futher.
            </h2>
            </div>
            <div >
            <p className="intro-sub">OVERVIEW</p>
                    <div className="contact-details">
                        <div className="intro-list">
                            <ul>
                                <li><strong>Full Name:</strong> Justin Anayo Ewelike</li>
                                <li style={{paddingTop:"1rem"}}><strong>Stack:</strong> NodeJs</li>
                                <li style={{paddingTop: "1rem"}}><strong>Technologies;</strong>  </li> <br />
                                    <li style={{paddingLeft: "1.5rem"}}><strong>Backend:</strong> ExpressJs<TbBrandJavascript />, NestJs<SiNestjs />, GraphQl<SiGraphql /></li><br />
                                    <li style={{paddingLeft: "1.5rem"}}><strong>Frotend:</strong> ReactJs<BiLogoReact /></li> <br />
                                    <li style={{paddingLeft: "1.5rem"}}><strong>Version Control:</strong> Github<BiLogoGithub /></li> <br />
                                    <li style={{paddingLeft: "1.5rem"}}><strong>Database:</strong> Mongodb<BiLogoMongodb />, Postgres<BiLogoPostgresql /></li> <br />
                                    <li style={{paddingLeft: "1.5rem"}}><strong>Third Party Apps:</strong> Firebase <BiLogoFirebase style={{fontSize : "1.5rem"}}/>, Sentry <SiSentry /> </li> <br />
                                <li><strong>Email:</strong> ewelikejustin@gmail.com</li>
                                <li style ={{paddingTop: "1rem"}}><strong>Education:</strong> B.Eng(Electrical and Electronics Engineering)</li>
                            </ul>
                        </div>
                        <div>
                           <span> <img src = {pic} alt="justin's pic" /> </span>
                           <li style={{paddingTop:"1rem", listStyleType: "none"}}><strong>Phone Number:</strong> +2348128672710</li>
                                <li style={{paddingTop:"1rem", listStyleType: "none"}}><strong>Linkedin:</strong> <a href="https://www.linkedin.com/in/justin-ewelike-445156a7/">Justin's Linkedin</a></li>
                                <li style={{paddingTop:"1rem", listStyleType: "none"}}><strong>Github:</strong> <a href="https://github.com/jayte054"> Justin's Github</a></li>
                                <button onClick={() => {downloadFile(resume)}}
                                        style ={{marginTop: "1rem", height:"2rem", borderRadius: "1rem" }}>
                                    Download Resume
                                </button>
                        </div>
                    </div>
            </div>
        </div>
    )
}