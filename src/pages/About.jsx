import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="About Me!" subtitle="This page is all about me Ihsan Magazine"/>
        <div className="container">
          <h2>About</h2>
          <p>
            Orang Ganteng Main Mobile Legends rokok malioboro filter dong, 
            consectetur adipiscing elit. Nunc placerat orci eu nulla sagittis, 
            sed suscipit tortor erat vitae enim. Donec egestas odio id aliquet rhoncus. 
            Quisque mi dolor, egestas nec lacinia non, Sinting bahasa macam apa ini? hahaha
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About
