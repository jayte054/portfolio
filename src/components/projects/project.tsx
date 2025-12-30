import "./project.css";
import smoozepic from "../../images/Screenshot 2023-08-03 at 18.41.02.png"
import foodpic from "../../images/Screenshot 2023-08-03 at 18.48.08.png"
import shoppingpic from "../../images/Screenshot (15).png"
import blogpic from "../../images/blog_image.png";
import shamzbridePic from "../../images/Screenshot 2025-12-30 at 10.54.56.png";

export const Project = () => {

    return (
      <div>
        <div className="project-container">
          <div className="project-names">
            <h1 style={{ textAlign: "center" }}>My Projects</h1>
            <ul>
              <div className="shopping-container">
                <div className="shopping">
                  <li>Confectionary Web Application </li>
                  <p>
                    A Confectionary web application built to to manage, sell,
                    analyze confectionary products
                  </p>
                  <span>
                    {" "}
                    <strong style={{ paddingTop: "0.1rem" }}>
                      Technologies used include;
                    </strong>{" "}
                  </span>
                  <p>Nestjs, ReactJs, Postgres </p>
                  <span>
                    {" "}
                    <strong style={{ paddingTop: "0.1rem" }}>Status: </strong>
                    Deployed ➡️{" "}
                    <a
                      href="https://moonbeam-gules.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Moonbeam Cakes
                    </a>
                  </span>
                </div>
                <div className="shopping-img">
                  <span>
                    <img src={shamzbridePic} alt="Moonbeam dashboard pic" />
                  </span>
                </div>
              </div>
              <div className="shopping-container">
                <div className="shopping">
                  <li>AI Analytics Blog Backend project </li>
                  <p>
                    The blog project was built to enable ease of use for clients
                    nd ease of oversight from the admin with the necessary
                    authorizations were needed.
                  </p>
                  <span>
                    {" "}
                    <strong style={{ paddingTop: "0.1rem" }}>
                      Technologies used include;
                    </strong>{" "}
                  </span>
                  <p>NestJs, Postgres, </p>
                  <span>
                    {" "}
                    <strong style={{ paddingTop: "0.1rem" }}>Status; </strong>
                    Deployed ➡️{" "}
                    <a
                      href="https://ai-blog-assessment-1.onrender.com/api"
                      target="_blank"
                      rel="noreferrer"
                    >
                      AI Analytics Blog Backend Poject
                    </a>
                  </span>
                </div>
                <div className="shopping-img">
                  <span>
                    <img src={blogpic} alt="AI Blog pic" />
                  </span>
                </div>
              </div>
              <div className="shopping-container">
                <div className="shopping">
                  <li>Shopping Manager</li>
                  <p>
                    The shopping manager app was built with the idea of
                    improving the productivity of stores to meet with the needs
                    of customers who have busy schedules to keep to.
                  </p>
                  <span>
                    {" "}
                    <strong style={{ paddingTop: "0.1rem" }}>
                      Technologies used include;
                    </strong>{" "}
                  </span>
                  <p>NestJs, ReactJs, Postgres, </p>
                  <span>
                    {" "}
                    <strong style={{ paddingTop: "0.1rem" }}>Status; </strong>
                    Deployed ➡️{" "}
                    <a
                      href="https://shoppingmanager.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Shopping manager
                    </a>
                  </span>
                </div>
                <div className="shopping-img">
                  <span>
                    <img src={shoppingpic} alt="shopping manager pic" />
                  </span>
                </div>
              </div>
              <div className="smooze-container">
                <div className="smooze">
                  <li>Smooze App</li>
                  <p>
                    The Smooze App project was developed to help cushion the
                    effect of the stressful environemts, providing an escape
                    through a platform to play your favorite songs and podcasts
                  </p>
                  <span>
                    {" "}
                    <strong style={{ paddingTop: "0.1rem" }}>
                      Technologies used include;
                    </strong>{" "}
                  </span>
                  <p>ExpressJs, ReactJs, Postgres, </p>
                  <span>
                    {" "}
                    <strong style={{ paddingTop: "0.1rem" }}>Status; </strong>
                    Deployed ➡️{" "}
                    <a
                      href="https://smoozepro.netlify.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Smooze pro
                    </a>
                  </span>
                </div>
                <div>
                  <span className="smooze-img">
                    <img src={smoozepic} alt="smooze pic" />
                  </span>
                </div>
              </div>
              <div className="food-container">
                <div className="food">
                  <li>Food App</li>
                  <p>
                    The food app was developed to enable vendors and customers
                    engage seemlessly with a functional payment platform
                    integrated.
                  </p>
                  <span>
                    {" "}
                    <strong style={{ paddingTop: "0.1rem" }}>
                      Technologies used include;
                    </strong>{" "}
                  </span>
                  <p>ExpressJs, ReactJs, Mongodb, </p>
                  <span>
                    {" "}
                    <strong style={{ paddingTop: "0.1rem" }}>Status; </strong>
                    Deployed ➡️{" "}
                    <a
                      href="https://foodorderring.netlify.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Food App
                    </a>
                  </span>
                </div>
                <div>
                  <span className="food-img">
                    <img src={foodpic} alt="food pic" />
                  </span>
                </div>
              </div>
            </ul>
          </div>
          <div className="project-image">
            {/* <span><img src="my-app/src/images/Screenshot 2023-08-03 at 18.41.02.png" alt="shopping manager pic" /></span>
                <span><img src = {smoozepic} alt="shopping manager pic" /></span>
                <span><img src={foodpic} alt="shopping manager pic" /></span> */}
          </div>
        </div>
      </div>
    );
}