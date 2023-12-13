import React, { useEffect} from "react";
import { TIME_LINE } from "../data";

export default function TrajectoryItems(){

    
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
    
        const elements = document.querySelectorAll('.trajectoryYear');
        elements.forEach((element) => {
          observer.observe(element);
        });
    
        return () => {
          elements.forEach((element) => {
            observer.unobserve(element);
          });
        };
      }, []);
    
    return (
        <div id="trajectory">
            {TIME_LINE.map((year, index) => (
                <div className="trajectoryYear" key={index}>
                    <h2>{year.title}</h2>
                    <p>{year.description}</p>
                </div>
            )
            )}
        </div>
    )
}