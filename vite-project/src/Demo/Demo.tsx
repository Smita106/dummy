import "./StoreFrontSteps.css";
import React, { useState, useEffect } from "react";

const StoreFrontSteps = () => {
  const [currentDiv, setCurrentDiv] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const divHeight = 400; // Adjust this value based on your div height

      // Calculate the current div based on scroll position
      const newCurrentDiv =
        Math.floor((scrollTop + windowHeight / 2) / divHeight) + 1;

      setCurrentDiv(newCurrentDiv);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scrollable-content">
      <div className="scrollable-left">
        <p>Current Div: {currentDiv}</p>
      </div>
      <div className="scrollable-right">
        {Array.from({ length: 10 }, (_, index) => (
          <div
            key={index}
            className={`content-div ${
              index + 1 === currentDiv ? "active" : ""
            }`}
          >
            <h2>Div {index + 1}</h2>
            <p>This is the content of Div {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreFrontSteps;
