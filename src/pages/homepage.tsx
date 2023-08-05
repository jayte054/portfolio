import { Contact } from "../components/contact/contact"
import { Experience } from "../components/Experience/experience"
import { Intro } from "../components/Intro/intro"
import { Navbar } from "../components/navbar/navbar"
import { Project } from "../components/projects/project"

export const Homepage = () => {

    return (
        <div>
            <Navbar />
            <Intro />
            <Experience />
            <Project />
            <Contact />
        </div>
    )
}