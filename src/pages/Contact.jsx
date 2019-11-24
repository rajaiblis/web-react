import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Contact" subtitle="Please contact me at ihsandroid"/>
        <div className="container">
          <h2>Contact</h2>
          <p>
            Halo Bossque pake telegram aja egestas nec lacinia non, Mauris sollicitudin, 
            justo quis fringilla finibus, dui diam ullamcorper nulla, sit amet placerat justo 
            neque quis quam. Praesent nec nibh at tortor ornare dignissim. 
            Morbi tincidunt fringilla turpis at luctus.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About
