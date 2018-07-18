import React, { Component } from "react";
import Header from '../components/Header';
 
class Stuff extends Component {
  render() {
    return (
    <div className="main-container mobile-responsive" style={{marginTop: "64px"}}>
       <Header/>
      <div>
        <h2>Get Self Certified with latest SDI Version</h2>  
        <br></br>
        <p><a href="http://forum.kirupa.com">Click here to download the latest SDI Specification</a>.</p>
        <p><a href="http://forum.kirupa.com">Click here to download Certification Manual</a>.</p>
        <a href="/test.pdf" target="_blank">Read more</a>
        
      </div>
      </div>
    );
  }
}
 
export default Stuff;