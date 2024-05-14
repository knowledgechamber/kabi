import { Container } from './styles'
import linkedin from '../../assets/linkedin.svg'
import behance from '../../assets/behance.png'
import githubIcon from '../../assets/github.svg'
import naukri from '../../assets/naukri.png'
import indeed from '../../assets/indeed white.png'
// import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="#" className="logo">
        <span>Thanks for</span>
        <span> Visiting</span>
      </a>
      <div>
        <p>
         {/*  This Website was made with <img src={reactIcon} alt="React" /> */}
        </p>
      </div>
      <div className="social-media">
      <a
          href="https://www.behance.net/kabithakamatchi"
          target="_blank"
          rel="noreferrer"
        >
          <img src={behance} alt="Behance" />
        </a>

        <a
          href="https://github.com/KabithaKamatchi"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
        href="https://www.linkedin.com/in/kabitha-c-a93236256/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={indeed} alt="Indeed" />
      </a>

        <a
        href="https://www.linkedin.com/in/kabitha-c-a93236256/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>

      <a
        href="https://www.linkedin.com/in/kabitha-c-a93236256/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={naukri} alt="Naukri" />
      </a>
        
        
      </div>
    </Container>
  )
}
