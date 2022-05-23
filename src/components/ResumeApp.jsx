import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Routes,
  } from "react-router-dom";

import HomeComponent from './HomeComponent';
import HeaderComponent from './HeaderComponent';
import ExperienceComponent from './ExperienceComponent';
import EducationComponent from './EducationComponent';
import AboutMeComponent from './AboutMeComponent';

export class ResumeApp extends Component {
  render() {
    return (
      <div>
          <Router>
              <HeaderComponent />
              <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/experience" element={<ExperienceComponent />} />
                <Route path="/education" element={<EducationComponent />} />
                <Route path="/aboutme" element={<AboutMeComponent />} />
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