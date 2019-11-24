import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Welcome" subtitle="Aku lagi belajar kakak!" />
        <div className="container">
          <h2>Welcome</h2>
          <p>
              Lagi Belajar Bikin Simple Aja, 
              dari ihsandroid ngetest kulak kulik kardus macam2 kali ini
              magna nulla lacinia elit, sed suscipit tortor erat vitae enim.
              Donec egestas odio id aliquet rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et 
              ultrices posuere cubilia Curae; Quisque mi dolor, egestas nec lacinia non, sodales eu lacus. 
              Donec ultricies nec elit ac ornare. 
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home
