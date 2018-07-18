import React, {Component} from 'react';

import logo from './../img/discover-logo.png';

import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div className="header-wrapper md-header-wrapper animation" style={{position: "fixed", left: "0px"}}>
		   <div className="header-content">
		      <div className="logo-container">
		         <div className="opener-container hidden-md">
		            
		         </div>
		         <a href="https://www.discover.com/?ICMPGN=PUB_HDR_HOME" className="discover-logo">
		         <img id="flag" src={logo} width="113" height="18" alt="discover logo" />
		         </a>
		      </div>
		      <div className="navbar-wrapper" style={{height: "auto" }}>
		         <ul className="right-nav nav navbar-nav" role="menubar">
		            <li className="desktop-extra-links">
		               <a href="#" className="log-in-link btn-primary" role="button" data-toggle="modal" data-target=".login-modal" aria-hidden="true">Log In<span className="sr-only">Opens modal dialog</span></a>
		            </li>
		         </ul>
		      </div>
		   </div>
	</div>
    );
  }
}


export default Header;