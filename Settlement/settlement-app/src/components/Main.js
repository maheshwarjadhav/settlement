import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import fileUpload from '../components/FileUpload';
import stuff from '../components/Stuff';
import contact from '../components/Contact';
import './../css/fileupload.css';
 
class Main extends Component {
  render() {
    return (
    <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink exact to="/">Submit SDI</NavLink></li>
            <li><NavLink to="/stuff">Versions</NavLink></li>
            <li><NavLink to="/contact">Certification Processes</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={fileUpload}/>
            <Route path="/stuff" component={stuff}/>
            <Route path="/contact" component={contact}/>
          </div>
        </div>
     </HashRouter>
    );
  }
}
 
export default Main;