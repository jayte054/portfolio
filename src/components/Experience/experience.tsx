import "./experience.css"
export const Experience = () => {

    return (
      <div>
        <div className="experience-container">
          <div className="experience-title">
            <h1 style={{ textAlign: "center", paddingTop: "1rem" }}>
              My Work Experience
            </h1>
            <ul className="experience-list">
              <h3>Instill Education</h3>
              <p>Full Stack Software Developer</p>
              <div className="decagon-container">
                <div className="decagon">
                  <li>
                    Work with the Senior software engineers to work on the
                    organization’s upskill platform.
                  </li>
                  <li>
                    Improve the viability and reliability of the code base
                    ranging from the api for the web and mobile platforms to the
                    frontend platform and integration of third party apps
                  </li>
                  <li>
                    Developing and Maintaining web applications using the
                    required technologies
                  </li>
                  <li>
                    Collaborating with cross-functional teams including
                    designers, product managers and other developers to create
                    high value products
                  </li>
                  <li>
                    Participating in code reviews and providing constructive
                    feedback to other developers
                  </li>
                </div>
                <div>
                  <span className="decagon-img">
                    <img
                      src="https://degrees.instill.education/wp-content/uploads/2023/02/cropped-Instill-Logo.png"
                      alt="instill's logo"
                    />
                  </span>
                </div>
              </div>
              <h3>Decagon</h3>
              <p>Full Stack Software Developer</p>
              <div className="decagon-container">
                <div className="decagon">
                  <li>
                    Developing and Maintaining web applications using the
                    required technologies
                  </li>
                  <li>
                    Collaborating with cross-functional teams including
                    designers, product managers and other developers to create
                    high value products
                  </li>
                  <li>
                    Participating in code reviews and providing constructive
                    feedback to other developers
                  </li>
                </div>
                <div>
                  <span className="decagon-img">
                    <img
                      src="https://techcrunch.com/wp-content/uploads/2018/11/Decagon-Logo-main.png"
                      alt="decagon's logo"
                    />
                  </span>
                </div>
              </div>

              <h3>BEDC Electricity Plc</h3>
              <p>Management Officer(2017-2022)</p>
              <div className="bedc-container">
                <div className="bedc">
                  <li>
                    Frontend Developer: Implementing desigin changes through
                    react on the company's website
                  </li>
                  <li>
                    Feeder Route Marshall: Supervising and attending to the
                    activities of my colleagues and customers alike
                  </li>
                  <li>
                    Graduate Trainee: Comprehensive introduction into the modus
                    operandi of the company
                  </li>
                </div>
                <div>
                  <span className="bedc-img">
                    <img
                      src="https://beninelectric.com/wp-content/uploads/2022/10/BEDC-Logo-new-dark-1.png"
                      alt="bedc logo"
                    />
                  </span>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
}