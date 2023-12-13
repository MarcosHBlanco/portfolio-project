import React, { useEffect } from "react";
import { LOGO_IMAGES } from "../data";

export default function SkillsImg() {
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          } else {
            entry.target.classList.remove('appear');
          }
        });
      }, {
        threshold: 0.5 
      });
  
      const elements = document.querySelectorAll('.skillslogos');
      elements.forEach((element) => {
        observer.observe(element);
      });
  
      // Cleanup
      return () => {
        elements.forEach((element) => {
          observer.unobserve(element);
        });
      };
    }, []);
  
    return (
      <div className="skillsLogosContainer">
        {LOGO_IMAGES.map((logos, index) => (
          <div key={index} className="logosdiv">
            <img
              src={logos.image}
              alt="logo"
              className="skillslogos"
            />
          </div>
        ))}
      </div>
    );
  }