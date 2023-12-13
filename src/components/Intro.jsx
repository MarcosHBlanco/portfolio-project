import React from 'react';
import backgroundIntro from "../imgs/background_intro2.jpg";
import coderPicture from "../imgs/coder_picture.png";

import "../App.css";

export default function Intro() {
    const divStyle = {
        backgroundImage: `url(${backgroundIntro})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const htmlText = "{ A dynamic and communicative person, venturing into this world of Information Technology, a student at Infnet Institution, in search of a solid and challenging career };" 

    return (
        <div style={divStyle} id="intro">
            <div id="coderimg">
                <img src={coderPicture} alt="coderpicture"></img>
            </div>
            <div id='introtitles'>
                <h1>Hello, i'm <span className="spantitles">Marcos Blanco</span><br></br><span className="spantitles">Front-End </span> Developer</h1>
                <p id='introparag2'><span className="spantitles">About me = </span></p>
                <p id="introparag">{htmlText}</p>
            </div>
        </div>
    );
}