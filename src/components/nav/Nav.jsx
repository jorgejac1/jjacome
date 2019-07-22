import React from 'react';
import { Link } from 'react-router';
import NavLinks from './NavLinks';

export default class NavBar extends React.PureComponent {
  render() {
    return (
      <aside id="colorlib-aside" className="border js-fullheight">
        <div className="text-center">
          <div className="author-img" />
          <h1 id="colorlib-logo">
            <Link to="/home">Jorge jacome</Link>
          </h1>
          <span className="position">
            <Link to="/home">Senior FrontEnd Engineer</Link>
            in NY
          </span>
        </div>
        <NavLinks />
        <div className="colorlib-footer">
          <ul>
            <li>
              <a href="www.facebook.com"><i className="icon-facebook2" /></a>
            </li>
            <li>
              <a href="www.twitter.com"><i className="icon-twitter2" /></a>
            </li>
            <li>
              <a href="www.instagram.com"><i className="icon-instagram" /></a>
            </li>
            <li>
              <a href="www.linkedln.com"><i className="icon-linkedin2" /></a>
            </li>
          </ul>
        </div>
      </aside>
    );
  }
}
