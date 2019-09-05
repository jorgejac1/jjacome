import React, { Component, useState, useEffect } from "react";
import Typist from "react-typist";
import "./home.css";

function Home() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <div id="header" className="home">
      <div className="container">
        <div className="header-content">
          <h1>I'm a</h1>
          {count ? (
            <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)}>
              <span className="green">Developer</span>
              <Typist.Backspace count={10} delay={2000} />
              <span>Manager</span>
              <Typist.Backspace count={10} delay={2000} />
              <span className="red">Leader</span>
              <Typist.Backspace count={10} delay={2000} />
              <span className="green">ME</span>
              <span>XIC</span>
              <span className="red">AN</span>
              <Typist.Backspace count={10} delay={2000} />
            </Typist>
          ) : (
            ""
          )}
          <ul className="list-unstyled list-social">
            <li>
              <a href="https://www.facebook.com/jorgea.jacome.g" target="_blank">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/JorgeJac" target="_blank">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/jorgejac1/" target="_blank">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jorge-jacome/" target="_blank">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/jorgejac1" target="_blank">
                <i className="fab fa-github fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
