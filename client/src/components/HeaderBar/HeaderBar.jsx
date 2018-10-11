import React, { Component } from 'react';
import "./HeaderBar.css";
import { Link } from 'react-router-dom'

class HeaderBar extends Component {
  render(props) {

    return (
      <div className="header">
        <div className="header-contents">
          <div className="logo">          
            <h1><Link to="/artist">Tempo</Link></h1>
            <h4>{this.props.userType} suite</h4>
          </div>
          <div className="header-items">
            <div className="header-item">
              <div className="header-icon"></div>
            </div>
            <div className="header-item">
              <div className="header-icon"></div>
            </div>
            <div className="header-item">
              <div className="header-icon"></div>
            </div>
            <div className="header-item">
              <div className="header-icon"></div>
            </div>
            <div className="header-item">
              <div className="header-icon"></div>
            </div>
            <div className="log-out-button">
              <h2>LOG OUT</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderBar;