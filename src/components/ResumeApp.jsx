import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Routes,
  } from "react-router-dom";

import HomeComponent from './HomeComponent';
import HeaderComponent from './HeaderComponent';

export class ResumeApp extends Component {
  render() {
    return (
      <div>
          <Router>
              <HeaderComponent />
              <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/*" element={<ErrorComponent />} />
              </Routes>
          </Router>
      </div>
    )
  }
}

function ErrorComponent(){
    return(
        <div>Oops! This page doesn't exist please return <NavLink to="/">Home</NavLink></div>
    );
}

export default ResumeApp