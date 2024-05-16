import { Container } from "./styles";
import project from '../../assets/project.png'
import externalLink from "../../assets/git-external.png"
import whatsapp from "../../assets/whatsapp.png"
import behance from "../../assets/behance.png"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

  

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="#" target="_blank" rel="noreferrer">
                  <img src={project} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="https://github.com/KabithaKamatchi" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
                
              </div>
            </header>
            <div className="body">
              <h3>Education Language Translation</h3>
              <p>
              We've developed a innovative learning platform to overcome language barriers in 
education. Our innovative solution provides instant translation for audio, video, and 
text materials, ensuring accessibility for learners of all languages. With user-friendly 
technology, our goal is to make education inclusive and accessible to everyone, 
fostering a global learning community.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li> Technology Used :</li>
                <li> HTML, CSS, JavaScript, Python, Flask, NLP, AI</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="#" target="_blank" rel="noreferrer">
                  <img src={project} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="https://madewithluv.in/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3> Agronomics Insurance </h3>
              <p>
              We created a project utilizing blockchain technology to enhance the insurance 
experience for farmers. Our system ensures simplicity and transparency in obtaining 
insurance, utilizing tech tools like Solidity and React, and operating on the XDC 
Network. This provides farmers with a streamlined and efficient avenue for securing 
the insurance they require.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
              <li> Technology Used :</li>
                <li>Solidity, React, XDC Network.</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

       

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="https://github.com/KabithaKamatchi" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="https://www.smartcornersproperties.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SmartCorners - Real Estate Properties Site</h3>
              <p>
              This real estate site displays land properties and helps buyers and sellers. Buyers can see lots of pictures, videos, and details about properties before visiting in person. It makes it easier for buyers to find what they want and helps sellers get more attention.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>               
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

       {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="#" target="_blank" rel="noreferrer">
                  <img src={project} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="https://drrohitdamor.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Dr.Rohit Damor - Online Appointment Booking Site</h3>
              <p>
              This website allows people to easily book appointments with you online. It takes just a minute to schedule a meeting. This kind of site is helpful for booking appointments and not missing any potential clients. You should try this website to see how convenient and efficient it is.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

       {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="#" target="_blank" rel="noreferrer">
                  <img src={project} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="https://velocityai.vinayaksingh.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>VeloCityAI</h3>
              <p>
              VelocityAI is a website that allows users to get instant answers to any question and generate stunning AI pictures using OpenAI's GPT-3 and DALL-E model.With VelocityAI, users can type in text-based prompts and receive a corresponding response.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Html</li>
                <li>css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="https://github.com/KabithaKamatchi" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="https://mitulindustries.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mitul Industries - Manufacturing Industries Site</h3>
              <p>
              This manufacturing industry website shows off products and helps the business get more customers and information online. Making products is important but making money from them is the goal. This site can help the business make more profit.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

       {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="#" target="_blank" rel="noreferrer">
                  <img src={project} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="https://mayatmaj.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mayatmaj - Film Production Site</h3>
              <p>
              This agency website promotes post production, virtual production, and video marketing services. It shows previous client work and reviews to get more business. If you need help with production, this website can give you information and connect you with the right people.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>              
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}
       

      </div>
<br /><br />

      <h2>Design Projects</h2>
      <p>
        These Projects are Showcased in Behance and the Behance Profile Url is linked with the Project Title.
      </p>

      <br></br>

      <div className="projects">



      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="#" target="_blank" rel="noreferrer">
                  <img src={project} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="https://www.behance.net/kabithakamatchi" target="_blank" rel="noreferrer">
                  <img src={behance} alt="Visit site" />
                </a>
                
              </div>
            </header>
            <div className="body">
              
            <ScrollAnimation className="projectimg" animateIn="fadeInRight" delay={1 * 1000}>
          <img className="proimg" src={whatsapp} alt="Ilustração" />
        </ScrollAnimation>

              <h3>Mobile WhatsApp Ui Clone</h3>
              
            </div>
            <footer>
              <ul className="tech-list">
                <li> Tool Used :</li>
                <li> Figma</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
      
    </Container>

    
  );
}