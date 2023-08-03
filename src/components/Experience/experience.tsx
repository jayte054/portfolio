import "./experience.css"
export const Experience = () => {

    return (
        <div>
            <div className="experience-container">
            <div className="experience-title">
            <h1>My Work Experience</h1>
            <ul className="experience-list">
                    <h3>Decagon</h3>
                <p>Full Stack Software Developer</p>
                <li>Developing and Maintaining web applications using the required technologies</li>
                <li>Collaborating with cross-functional teams including designers, product managers <br />
                    and other developers to create high value products</li>
                <li>Participating in code reviews and providing constructive feedback to other developers</li>

                <h3>BEDC Electricity Plc</h3>
                <p>Management Officer(2017-2022)</p>
                <li>Frontend Developer: Implementing desigin changes through react on the company's website</li>
                <li>Feeder Route Marshall: Supervising and attending to the activities of my colleagues and customers alike</li>
                <li>Graduate Trainee: Comprehensive introduction into the modus operandi of the company</li>
            </ul>
            </div>
            <div className="experience-image">
                <span id="a"><img src="https://techcrunch.com/wp-content/uploads/2018/11/Decagon-Logo-main.png" alt="decagon's logo" /></span>
                <span id="2"><img src="https://beninelectric.com/wp-content/uploads/2022/10/BEDC-Logo-new-dark-1.png" alt="bedc logo" /></span>
            </div>
            </div>
        </div>
    )
}