import React from 'react';
import './app.scss';

const logo = require('../img/img1.jpg');

const App = () => (
  <div className="container">
    <div className="row">
      <div className="">
        <div className="text-center">
          <img src={logo} className="profile rounded-circle" alt="" />
          <p className="content">Mexican developer by nature, Technical Project Manager by accident</p>
        </div>
      </div>
    </div>
  </div>
);

export default App;
