import MailImage from "../imgs/envelope.png";
import InstaImage from "../imgs/instagram.png";
import LinkedinImage from "../imgs/linkedin.png";

export default function NavBar(){
    return(
        <nav className="navbar">
            <div className="navtext">
                <a href="#top" >Welcome</a>
                <a href="#intro" >Intro</a>
                <a href="#top">Download CV</a>
                <a href="#top">Let's talk</a>
            </div>
            <div className="navicons">
                <a href="mailto:marcoshblanco@gmail.com"><img src={MailImage} className="socialicons" alt="maillogo"></img></a>
                <a href="https://www.instagram.com/marcoshblanco/" target="_blank" rel="noopener noreferrer"><img src={InstaImage} alt="instagramlogo" className="socialicons"></img></a>
                <a href="https://www.linkedin.com/in/marcoshblanco/" target="_blank" rel="noopener noreferrer"><img src={LinkedinImage} alt="linkedinlogo" className="socialicons"></img></a>
            </div> 
        </nav>
    )
}
