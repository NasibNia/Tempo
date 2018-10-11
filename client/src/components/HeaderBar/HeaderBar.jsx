import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import "./HeaderBar.css";

class HeaderBar extends Component {
  render(props) {

    return (
      <div className="header">
        <div className="header-contents">
          <div className="logo">
            <h1>Tempo</h1>
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
              <Button variant="contained" color="secondary">
                LOG OUT
            </Button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default HeaderBar;