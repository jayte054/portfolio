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
              <h3>Alerzo</h3>
              <p>Backend Software Developer</p>
              <p>NestJs</p>
              <div className="decagon-container">
                <div className="decagon">
                  <li>
                    As a Backend Engineer, I contribute to developing scalable,
                    secure financial systems with a focus on B2B platforms.
                  </li>
                  <li>Integrating third-party services</li>
                  <li>
                    Designed and developed scalable and secure RESTful APIs to
                    power B2B financial operations
                  </li>
                  <li>
                    Built and maintained microservices architecture to handle
                    different facets of the financial platform
                  </li>
                  <li>
                    Debugged and resolved backend issues, ensuring high system
                    uptime and reliability
                  </li>
                  <li>
                    Optimized database queries and application performance to
                    support high transaction volumes
                  </li>
                  <li>
                    Ensured data integrity and compliance with financial
                    regulations
                  </li>
                  <li>
                    Implemented logging, monitoring, and alerting for production
                    systems using tools like Posthog
                  </li>
                  <li>
                    Collaborated closely with frontend developers and product
                    managers to deliver seamless user experiences
                  </li>
                  <li>
                    Participated in code reviews, sprint planning, and technical
                    design discussions
                  </li>
                  <li>
                    Managed CI/CD pipelines for smooth and reliable deployment
                    workflows
                  </li>
                  <li>
                    Handled secure storage and transmission of sensitive
                    financial data using encryption and secure protocols
                  </li>
                </div>
                <div>
                  <span className="decagon-img">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAsVBMVEX///8WX84AWc3///2Hpt57nN0AV80VX80AUMoJW80AVs3h6PZYhtQAU8vU4fJSgdIcZc3J2/CatuVIwJPw9PsAV8j9//oXXtDz+Pdjjtepv+Pa5vGXs+Xj7fTG1u21yuUATsowb9B8oN3e6vCjveXu9fayx+dhjdO6zOSXs95tltuy49F5zauK1Lbf8+s5dsw2u4rF5tlVxZ3n9u8iaMlQf9aLqt4VYstZhdc8ddFsltRWZEjpAAAGbElEQVR4nO2Z63LaOhSFbYlIlmKZkAI2GEOgkAZ6S1sCh7z/gx1b8h25P3qc6eTM+mYyEGlb3kvaWzccBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvFcojaJoSv+2G29IwCeTCR/9bTfekJN0XZfd/G033pABSxWS/7VCAoXvHSh8/0DhO4JWn/lXmn1aFFJKafOZVkv14s7dEG3+Q23F/TJ+HMz82Wb+MfXwaej7/la/zKbQiecb358NVrtmE8v0KX8/dWiStfUp1oW6rTbDfbMb6Gh/8P3DflnbH37+8vVbX+LSVke+koQIQpj6vqITkeIlNoXp+D1eVGopUlM1C+qO8uyxh3g5lIwIMXnJzCPdVhvyUD1InfGCeyxrUSoxGOfD+OX5w4fnviTS3eFBuAUh+86zT+/WptAJLl5pGxLvsKs0ZqYuXytTL7TCcdVwHTaqFM65rCrI5H6alX5LBX748KUffU5wZG5YKcw/bQopnZO6y9xl67gMOKJ7JuRuoTBNr7FVoCuXxeunB69REyo/Shv8oRX+7EdhYO9m79Yy0+xV2DITPG4qLCuMQnvjshhDOmOtqpC8RI7zK1P4/LUXhWOROy1Emj6VgGuF6RT0ULjPGCm+nsdXCsM0S71DVjY9KlZBiuZlkAvcqOIJyYqXk1kaFp+fn59//upDIPUzV3ko2MtgcfI5qaL0agx3uQTGZ6fF4CUPWDZrKxTin8Fim8201Enua+zXhYh8Gn4yKRiq42GxuFnL0Pw3T6u+ff4R9SGweIcaBlmGT5MbL+xUuDHjpm6SrIoG3/P/85DLFYbeLO5Y1k55zCqThpQe8wGcazHR49kY3PWjzbxkSLLJhW3KZXwueYfCxLjDHnP3HHrQ3SP+aSiU+653DfJJkxXzzEqndcgTs02gzu5OZI2oLe1t6Y9V1qLwp1XRSXUo3GoHJ9uaz77uc/6xpjDtrC6BKh+xciId6scncWkyTXRJuO5rc0PpXk9lKqkVRiZZ2gopnQmdsfsqr7Yb7ZCc1xSKjggrBNZWirHpkkGlhtJ77dBD0tsYHoQewkaZUX2t8E5375lJJgtM2pBNpTD/fs1JNnIwYzTRQxrXzczyop560kedS9ag3DZ6bGRV6ETNpbmG8HXaaIVyZX/V5ipE0zSUJiLrTHXksq3TFzoi1WOjLBZWhclDp8Kh7iGtUNlvHgdea5LJmGcK9e6uhJqoYou+BFKtUDYVBsSqcPc7heUYWhWWOajqAp1HdqXQMdlO7vsSSE1MDBpRqoPHEqVm9ePXRwV2cH6vsFgmZEOgs8x0h3f1QxiNbH3+XyTq+1D33CicWaOUUp2z7tkftpmZqbhLIbXlYIZJB1XPXBpoWy/oa7XItzSytsLSkWtdLfLbYe4mXa11KCxDlCzbNcfsTeJSWy3MEhnK/lb83dm8PahK1qJDoQkq91Jb8KobDadT4SA/PXhtgUUEsXKBoc7C7EBee7zOOJn382Xma/oXH/O947XC6YuuYpfY6KKr84QQIoresSosTw/tEM3qEjPDqtdI3w/RYl+ngivbPycfRO7NnpJxMtqU523L6WmpOzg9hgyC8Th58tNdZRiG5PA7hcUyET6Oa5gRosVeXh73yXh3u80PF+zQ64XUY5ElSty5XnHqs58PD6Sw5XdCFoNd7D8sCumuaJAf7yq4Psc7OiWMfib5mTBzrBG8M9X/jFdVqgprp3SLQme6ZsaCp2Nn3Am9U7Frt41h0nGBkIcsDYrzKOd5gzxUy37vFKfTV2l1wnaLsbu0beWgeU/TUth1E1UmZSBaFoKtpk6vpPPLnlXBmfYhyRVmtafG74fUiQ6q5lEo6mcpc0xpRmnXPU0xTOnU1uw0uR71fy1MnXio8hwIhbqstFcP5q6t9RswpaviOjEMmZrFNXfMWt1UmBDXRi0QabQoU1pIchq/0bV3fDqS7K7ofJMuG588ydRFTwZLLy30GucFujycte361Dj3OK+prTy2LsKHaVttpOS7uo5oPuSZFX/Ztp7ul10QBLvsF4Q0cm5v88Gh4+D2tjm1UWMbRw5t7jyyx4KoNQQ0sBG1f9ygSdoidfrbygAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgDfmX7SVZ8oWi+rcAAAAAElFTkSuQmCC"
                      alt="alerzo's logo"
                    />
                  </span>
                </div>
              </div>
              <h3>Eulav Transact</h3>
              <p>Full Stack Software Developer</p>
              <p>NestJs, Nextjs, Tailwind</p>
              <div className="decagon-container">
                <div className="decagon">
                  <li>
                    As a Software Engineer at Eulav (an escrow-based platform),
                    I specialized in building practical and optimized user
                    interfaces that ensured a seamless and secure user
                    experience across all stages of the escrow transaction
                    lifecycle.
                  </li>
                  <li>
                    Software Development: Translating Figma designs into
                    functional interfaces and integrating APIs from the backend
                    to ensure seamless operation.
                  </li>
                  <li>
                    Problem Solving: Diagnosing and resolving technical issues
                    to improve team efficiency and platform performance.
                  </li>
                  <li>
                    Performance Optimization: Identified bottlenecks and
                    optimized performance in both frontend rendering and backend
                    request handling
                  </li>
                  <li>
                    API Design & Integration: Collaborated with backend teams to
                    design and consume RESTful APIs, ensuring secure and
                    scalable communication between services.
                  </li>
                  <li>
                    Code Quality & Reviews: Participated in peer code reviews
                    and implemented unit/integration tests to maintain high code
                    quality and minimize regressions.
                  </li>
                  <li>
                    Agile Collaboration: Worked in an Agile environment using
                    tools like Jira and Git, participating in sprint planning,
                    stand-ups, and retrospectives.
                  </li>
                  <li>
                    Cross-Functional Communication: Communicated effectively
                    with design, QA, and product teams to ensure features met
                    business and usability requirements.
                  </li>
                </div>
                <div>
                  <span className="decagon-img">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="instill's logo"
                    />
                  </span>
                </div>
              </div>
              <h3>Instill Education</h3>
              <p>Full Stack Software Developer</p>
              <p>NestJs, Graphql, ReactJs, Mongodb</p>
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
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT0AAACfCAMAAAC85v7+AAABO1BMVEX///9QGBaeLipjWz/HtX5OTk9LS0xJFhRFRUaiLytEREVBQUK6qXb39/dZUjmnMCyGelXWwodjY2Tw8PDNzc2WlpepqarU1NR2dneRkZFqHx1UGRff399cGxk9PT5SUlO1tbVGAAC+vr5ubm5BAACAgIHEsXaIiImbJSCZHBfn5+daWls9AACenp5NEQ/Gxsa6urrw7N/c0bD16unevLvKkpCZFxBaUTHHu7u9pqXg2dn29OxeLSzk28OlQT2agH+1amdMRCZoPz7VyJ+uWVaXCgDjx8bo4cxrY0nVrKqum5p/eWWkoJO2qH/c2dChmoTPwJLNyLuiZmWIUlBdAADnw8JwGBR4UVDChoSqS0eZd3ZlOTi6c3LMtrXDvayKbGudmImLhnRrLi0tLS6LYF+ykpJ9cUmVfHy7tJ9lbWWCAAAUUklEQVR4nO2da0PbOBaGk0CMset2Jgm5tBnHIQm5kYQQrgFayr10tpPuzE7LtN3ubsvs/P9fsJKvknwk25QUnOXthxJjOfaDjqRzdCQnEg960IP+j/VmeNd3EGf97ee7voMYa/jo4q5vIcZaf/TyzV3fQ3y18ujlL3d9D7HVwcqjx9t3fROx1WT+0eOXb+/6LmKq4Qqit/3vu76NmOoY05vb1iIW2xlP5W5ipr35eUzv5T8jlnuxP5XbuVv9PWqBgxWTXmTT/XV1J+pX3Xtlf/tHxBITq+7NbXciFTv7vf4u4jfdf+3+dhitAOozLHoRTffw94XVUbSvuvfS3v1+Gu2Z1h16j19HKTY6fbpQvYz0Tfdf4/rT9vtIJebnbXpzc1ECLZvtpwv9o6j99D3X9erTJ8+jVL7zFZfedgTT1Z4/ebqQrM/YoOWo//TJ1kaEAscevSimu7GF6VVfRL7B+6ydavLpk9RV+AJ784TlvtwLXe6whenNmOn+UV1A9FpnoQtYhuvQC+3rjlspTC9ZnSnTrSYxvQj9xjFZ98IPmDfbNr3rG93m/dTZqkkvtRW2gG24Nr3wvu6VXff6H254p/dRL6o2vbD9xsEKRS+s6Z61Uxa9ZH92TFd71rfotT6GLDFh6t6/whU7bDn0qrs3vdl7J2S4Fr1UO9yQzzFch97c61Cmq22l3Lr39Zvu+D4JGa5D71WoAnaP69HbDjU5tNF26SWr33TH90ijoz6i9xOm1zoJVWLC1r3tv8IUw4br0KvPSphqXE869FKtMK25tsLSC+VujLDhunVvViIFLwh67c0QBc599ObmQrgbr9oEvf67GXE3sOE69Bafhyiw7qe3HWLMYhquQy9ZzX7zjd8Hjfvm01j0wnhr2vy8j97j4FnxkQnPpTcjDd9unaQXwnSHK356c3OBxSzD9erebMRZfqXqXgjTXYfovQwMkZ7QdW82Gj5tNUnSSwUH6CeA5QbPboysy7v0ks9mwVn7xNALNN29eYjedlDDZxuuR28mGj7saJD0WocBFuWNV6h2L6jhsw3Xo1f949ae4c6k7fdpeqlWgOkeg3UvqOEzfVyKXv/oFh/jjjSyDdejtxXg685z6Ikbvo02Sy+ZjP+07q6PXkCYasih91gcYH7f8tGrxr/h+1xl6S2KZyYPVmB6cxciZ017vuinF3tXd/Shz9JLtYXuxjGn7omjVOPTlI9eP/b5LON60k9POGaZ59ITubqbbT+9+Mf4rgF6LdG87nCFR0/o6h62AHqrcR8vf+376aVSgobvgE9PEOMbPU8B9Oqfbu9BtGwH6fvGbbQPEL22YGrtmEtPFOM724Lowd2G1iuVSmXn0xr60GSgZNGxHnWkvFTrSpJUqTXyVjZhp1kCtWT+No9+GjhlB+hDHroR/M1l6BeOxi48kl6LPyuuTea59ATdhtfskfT6n6Fzs11F1gvuI6iyrDbpMzqSrGQIj6hTVGVJSqfTCKCim1wLugxKMgvU0De4wPK6rBahG0GX0HPcR0q40SnWcvlxlr0VAT3+5MZJC6S3D1laNiOlZZfekoyo6APqjE4lLWW8jwMdkZNkVVUVWUqr5gMXVMlR2sJqqWKWKEppxaOnpKUGdNOopCKk97UK0jvlurrnAnr88TLR7JH0klUoaRegJ2UozDS9AkImSY38IDfIlzKqdWqhm7HVRRAqGVdmkVui9xNouYKcgnUBPX6g4KwF0wPDLAC9tLJEnkHR02oIXtd5yuyyTSVrS8up6OSO89H6K9wOPdfJZejxR3zUWJmlt83rNl61OXUPii/76FVQ9dHJ5puit4boVASNu0mPaSFuh94Zhx43SrU3EdHjLpg84dQ9sNvw08tJVDtH00NVT6Y7YFrTo3dZh+lxR3x780J6vDALAY+mB0XnffQkDR1RiUEFSU9DFVMtJPiaHj03RMDS2+J4AUynwVouZ6X46JRHbx/oNnz05M4APWDaO5Wkl2XNmtXU6LmRUR89Xj7LgZDeHKfT3Whz6IE5pH56ZdM8vTEZS08dsNcgNDV6WcJwaXq88TLTabD0LuDmcpNPD+h0/fQKaPiGnmTNOUa1e+hs+OFtTY0e2Wkw9A7hEhMxPU6ne8hr98BOF6KXaKLmT3L+NhS9npJOywb/IadGb5db9xav4G5jXkwP7nQ1YqzM0IPS+Pz00CN0dMSoZB+j6HUq6CnlJd9lHE2N3n+rPHqpRbDbYLtcHz0wxDfa4tMD8pdBemYVc7xf2tdY0/FwurvMGWRNjd7nPpfeFhhfHq4E0AM93TMBvaTf04XpJbp40GcRYvzcvOnnKuklsOudFj0z65FDD/Y22AGLr90DA6Skp8HQg7K/OfQGyGVTrGExQy+x3DXdOTndAAZ+U6P3LMmlB0+srQfRA4csmy0+PaDT5dBLNDAis3qx9BKdkiSbESq55LPfadEb1/n04FVXxwH05l5Dne7H26HXwfZZM39i6aFDvYqK+ck+l3da9D6J6IEhPjRgWbFl09t2ZA/4AHraiYieP7zMo4fjAWkVD/oAekiDBuYndRl806J3LaIHerrzk8nx+sH5cLjnKNspv3nz9q+f//Xv168v5rahVfYjasDC0vMP+Lj0zIFxRePRQ/wyyLjlGn1wWvT+qArogTmkwuRkBLLwM0QvJaAHzOny6RUkq+PIViSQXqJTw2M/+omnRe9rPyq9G2m8JaLnH/Dx6ZmDPqnMp5fI4qaPngWZFr0jET3RvFo0bYjoJX/ynS+gh0NVUhFHpTj0Ennk0VWoI1OiR8xGQvTCrRoKIXq4x9Lz5xMI6CUGuPIVUAPIozdAPYtMHZkSvdG+kF6YhRuhRA/3WHqrPmdDRM+MFtQSNS49MxhDHZkSvXEyKaAXerlkoN4L6dV97pWQXhY5tWq5KKp738dyx30RvXa4FWshdCi0XP/2GEJ6CQNVvtISlx4O5H+XXuOMS6/Vaj8/vL127/B5mzMrlIRyWcT0cJi5QrZ7lGtWxgM+OtI8JXo7VZBeq926en92q0mxo7P3V602m/V9Q3p40EfOsRXzHppCV/KNo7+NHne+CaDXam+1Pm5MJZ14tPFx8bTd8tPzLRIPoJfoqWZ2gf2pU1HV5nI5q2mdXBO5apLMPHAoepk8Kbvy4j9TifoFcRkfvXb7ZPPWxsiQzjZP2m22z41MDw/6PHqGikMrEk7GkM10FnaGKAw9VIyQbjecVtTGk0LO3VH0+qs/nWyOpr72SRu9Ony6Sja4YN2TFJIe2/jkdJJeVzHzfExJSsZnaqHoUXKcFVmij0sySK9frb7b/W55nKPdd9VqX0gvTdHzVaeGF2ZGpmug0Z+sKIosS7U1/98/mJ7Mo5dmf+Gn16/W3+1+55UTCGDdBuinl9CQ4A+cg9nCwMgbyzl4G0XgCvQhzSfxcVOYHq51l9H2brwlZS+tGuhv9+KhnWq1enQ9vrN1ntr4+qhaBepeLLTT/7xzx0tktdznfkzpjW8xY/3m2rkXdxFdZ9X96zteMDG+/LA61RHm9DRGfUby886dbU2h7XxOVvtxXfEysoYr+y/u5P7HL46sPjemy0zt6CgC+OHyOwMc7x6t2uO91Zju7eBF5r+7r9H3fI3f/Pe1bDgyM3u0wnK+t7TUy5Oj4YJhuNjLhuE1P9lcr1GrNXo57xC6nlMya1AqmEc8D6Js4LKG9z05I+9+0MivoWeF+vWFw1fT93MTyM/dr5Pf+x/fKVpGVXVLXXy7Bd3+rHaLrs+W1yX3sQzddd81IyOjs/E/NxM8iz44CWqFL+aFFMW64hK+ur7snNisoIJIlSUHU1PX3eBV9ssXMg5Oz0gutNotBPCb2AQIoVvcalHf2v/Vd5ZWk7oNU0UzK6WgS8WeYeRLXfTQDfsPnFe7Lr1lVbIfK1vUFamYXx7kG148xFAlqWv/XK4VkWrI8zX/N3C40HGjO+j6NaOQy6P/Hce4RHjZ6K9A0vuDyiVYWMTxvdOrzbPp1MCzzSszvrdI5R4BG2NoNaVEfi6oTk58oajKdnQgr1b89LIZWe/Zz+0ZWVHtdekgV6eiuJXYpZetyGn76JIi2yGcklyRFJsHQ+/aRw9pET3h4cYt+2/jjY/PW/b0Bk2v7t/8FtGjZiYQPfdZe6pNFqRXlIEU3LKkJ2oqlVtariiOtXr0mrLqIl5S7AUOJbVXU+2/JUPv0ypAzwrOp05ubUIykXh1kiImNhh6QIhFQC/RsEN/EL2cDi17QWfiMBd5CKKH/vcIZzOS2eRiegOn6jP0xlDdcwBG2Pc7SB+pSTWGnt9RE9Ir6Fb2MkSvIXeBoX9N7aFL6GTUFKJXksnoXV5RzTNKqOJl5JppiQw9OvuRoRfthQdCbQroAbmjQnqJrhVVBuhlVZlqLy2Vce6BlqGWCUL0KvRaLt2a1yypzcRAt8yYpUelYtD0bi8Rg03FoOj1gR1tMD1ngaP5fBS9pmx2tgC9nKous9cyO+cEbsi6REsO0OtIdNq9DbOkNnBzav11aHr0kIWmB2d930x01jdND3hDExqx2Otpu4b5fBS9nmJmhwL0DAVar9Y1c53RmJHodQF6BUnJk8VqVujfpFeWzJxAlh6VwMdY7i26HiMBPf9wD9OzZ7Ks1e9h6eUVYL1aR7Wm57rkKAigl5PUNbJcUfbooe/EtZqld73KpcfZD0gwkNkbvnn7F/h7erULRa8OrBXSanKzY6psLfOm6JW4lpuH6l7e3nLAUIiZoYh1D8+BSlkfvU9cerx9l89XJsfH6wcH5+dDU2/evn37z79++eX1xdzc4+2XnD1FqJVWND0gNiruNezHyis+essqsNoPDT2KtVqtWJMI0wXolZl2z84vt+ihJhV1SBpDb8ynx8mgwlt4rbiZ3ys//vnSTPl+/Fi4wpTqdCl60BpJIT1NtbImDMVbcWpY9bCj+9dblXV3Pwci2yJMn2v13zY9VOPRH4ihp3F7DV72HrPU6scf6PW5nNXNr3j0wPW5Qnprdse6rCruo/Qsq9S6UoZtOVArmSsXkMpFM1/cEkSvKMnEvaAeyBoF2vQ0XS766L3rc+hxu9yJkB5nZT3V6VL0oDfkiOhlHUJl3WunavbS3Z6iUm0XdamB4k2qQ/QGKlFzUUOXsX0Nu8auKVK5S9OjlvnRdY8Xa6HXu7D0eJ3KKY8etC+BgF626O4v41ka+r1hFZQliW75yopXtCu7pgv6uUWJ9HN1qwd26SWKaqPI9Om7HHqLVzwOByJ63B1FnnPogXtiADEW67G0QUZWHU/WUGzPopyRKnZ3OkD4DDLGsiSr7mWasuo8FEivLEsV6yetJyk2NI8e8lkqTN3bqcP0+Gm3QxE97jZeZKdL0YOmI9F4L2PvGtUsmPTkpeXlZaNU01XJcE+rKUpxrZDrVYjtjtZkWc2UjAE6uYKLZojl+APPFQHpIY9MlhvLhZxRU9SaxtLDiW8MvRGHHt9P2xPQ43W5dLdB0vMnLSeo2PIX/JCFL7L9udIjGnatqVuHu6QX0XAC0V96mIfu+W7Ziu6gLMu64dLzzinX7CtKbvPZ1D38XfULc7scy+X7afQuXgw9fpIvXPfgfai0NS/d0PQv871Ss1nqGSzqcq9RbJQGdCNTNproaDOPq16Oylcc5J2pkKyRd6/VyXs/JwrmFYlErEHew1+mroZFdLokPf4+VPS+DjS9C+7GHuRSNZLe128NwsLlv+WqUcpeVkF6KX4Jqttg6PG/+QSMjsZ9o/4dkJ4ouDfk0xNsGbwJ04tpDosjYsULQU+4Ro1LT/QqU2K8TNCLaxaGK29Ol6AHb4hha8KlJ9gNilhlSta9W3+c7yxvJyqCnvAVG+s8eheCHFRifbhHL/77LV8C9MRL1Mh9MSh6wjfSvQfoxX+v7zFATzynscepe/yxMpa3SJegF/t95r2ZIaLuiRtzHj3hW61GfnrQTjZxk9vwufRa3BCBJSLMQtETs3AbPo/eDLxf49JPL2Aq9xymF/A2Pze+7NKL+1gZy00ocOkFvUR3D7RccbNHjPg8eqI9B2Mi/O5cpu4FZaFNQHoBL/PTWHpgVD52cho+h17rJMhR9ho+kl4QC6fhc+nFfrSHtcvQC97O4RyidxFUyonxOfTiP9rDcho+h95pYA7GHmC5we++HjOW69+QIJayGz7XcoNLHAP0hBuym7pqkfTgyGj8ZE+s2fTC7CTixvg8eiIn19Z7il71v7dw6/dAOxQ98SuZLA399EK8u9keszj0Yrq6j1XHWvXiWG6YrHmf5QaN9rBGV4sEPf8eQDHVO4JeuNeuO2MWj16Yd9ZbpmvRmwU3zZI1ZrHoBb0G0dI5S+8iTE2y4iwWvdkYr2B1SMsNtdxlj7Hc4PEKltYm6t5sjFewTNM16fF2SGc1YeiFeOd6wt6+1aQH7VIdV5lxFpNe2GRve8zi0gvXBZjvOjDpzUJ8xVGn7tDbCrlObUjXvRDjFSzt1KU3O4Zrma65Tu0wbIkJSU80F0npxF6nNhtvXHeETRfTC79Kw9r126EnfOMdIWy6mN4sGa4VKcD0gt9X72hI0guMrzjC+SyY3oxECBwhdwPRCzdUNmXlUln0wjgatg5bmB6YcBtjoQEzohdll2DTdG16YRwNS8jXRfRmZ6hsabzfx5YbYWX40KMnyJ1ihXxdRG91FmLypL4ietG2uXUtN5yjYet9a/HZLA2VLe3UFxajrezDpmvRC2+4+P3hi89mJTjlKbu/8CRgFpzR0Kl7oSIErq5az2Ygh4DVi3rU3b0nFr1Ihosnh6rgO4fjrfFqWC/NEfJ1TXpRDBcntMzCLLhPR4cRC+zZlhux2MmMDfYsXUZeSz/B9CIMlS1t+HdgmQFlI1eJ8xVML5rhIi9l9vqMG2nPtNy7vovY6vjHHyIb7oMcDVHdi2q4D3L14w8ho8oPAnTw54Ph3lx7f4aNKj8IELwBy4Me9KAH3Tv9D63iu9Eib4HoAAAAAElFTkSuQmCC"
                      alt="instill's logo"
                    />
                  </span>
                </div>
              </div>
              <h3>Decagon</h3>
              <p>Full Stack Software Developer</p>
              <p>ExpressJs, ReactJs, Mongodb, Postgres</p>
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
              <p>ReactJs </p>
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