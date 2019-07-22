import React from 'react';
import { Link } from 'react-router';

export default class NavLinks extends React.PureComponent {
  render() {
    return (
      <nav id="colorlib-main-menu" role="navigation" className="navbar">
        <div id="navbar" className="collapse">
          <ul>
            <li className="active">
              <Link to="/home" data-nav-section="home">Home</Link>
            </li>
            <li>
              <Link to="/about" data-nav-section="about">About</Link>
            </li>
            <li>
              <Link to="/services" data-nav-section="services">What I Do?</Link>
            </li>
            <li>
              <Link to="/skills" data-nav-section="skills">Skills</Link>
            </li>
            <li>
              <Link to="/education" data-nav-section="education">Education</Link>
            </li>
            <li>
              <Link to="/experience" data-nav-section="experience">Experience</Link>
            </li>
            <li>
              <Link to="/blog" data-nav-section="blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact" data-nav-section="contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
