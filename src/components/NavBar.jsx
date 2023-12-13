import MailImage from "../imgs/envelope.png";
import InstaImage from "../imgs/instagram.png";
import LinkedinImage from "../imgs/linkedin.png";
import gitLogo from "../imgs/github.png";

export default function NavBar(){
    return(
        <nav className="navbar">
            <div className="navtext">
                <a href="#trajectoryTitle" >School career</a>
                <a href="#skills" >Skills</a>
                <a href="https://api.whatsapp.com/send?phone=5521996652828" target="_blank">Let's talk</a>
            </div>
            <div className="navicons">
                <a href="https://github.com/MarcosHBlanco" target="_blank" rel="noopener noreferrer"><img src={gitLogo} alt="githublogo" className="socialicons"></img></a>
                <a href="mailto:marcoshblanco@gmail.com"><img src={MailImage} className="socialicons" alt="maillogo"></img></a>
                <a href="https://www.instagram.com/marcoshblanco/" target="_blank" rel="noopener noreferrer"><img src={InstaImage} alt="instagramlogo" className="socialicons"></img></a>
                <a href="https://www.linkedin.com/in/marcoshblanco/" target="_blank" rel="noopener noreferrer"><img src={LinkedinImage} alt="linkedinlogo" className="socialicons"></img></a>
            </div> 
        </nav>
    )
}
