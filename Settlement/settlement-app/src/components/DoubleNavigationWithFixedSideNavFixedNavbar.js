import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, NavbarNav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Fa, SideNavItem, SideNavCat, SideNavNav, SideNav, Container } from 'mdbreact';

class DoubleNavigationWithFixedSideNavFixedNavbar extends React.Component  {
constructor(props) {
    super(props);
    this.state = {
        collapse: false,
        isWideEnough: false,
        dropdownOpen: false,
        toggleStateA: false,
        accordion: false,
        collapsed: false,
    };
  this.onClick = this.onClick.bind(this);
  this.toggle = this.toggle.bind(this);
  this.onClick0 = this.onClick0.bind(this);
  this.onClick1 = this.onClick1.bind(this);
  this.onClick2 = this.onClick2.bind(this);
  this.onClick3 = this.onClick3.bind(this);
  this.handleToggleClickA = this.handleToggleClickA.bind(this);
}

onClick0(){
  let state = '';

  if (this.state.accordion !== 0) {
    state = 0;
  } else {
    state = false;
  }

  this.setState({
    collapse: !this.state.collapse,
    accordion: state});
}

onClick1(){
  let state = '';

  if (this.state.accordion !== 1) {
    state = 1;
  } else {
    state = false;
  }

  this.setState({
    collapse: !this.state.collapse,
    accordion: state});
}

onClick2(){
  let state = '';

  if (this.state.accordion !== 2) {
    state = 2;
  } else {
    state = false;
  }

  this.setState({
    collapse: !this.state.collapse,
    accordion: state});
}

onClick3(){
  let state = '';

  if (this.state.accordion !== 3) {
    state = 3;
  } else {
    state = false;
  }

  this.setState({
    collapse: !this.state.collapse,
    accordion: state});
}

onClick4(){
  let state = '';

  if (this.state.accordion !== 4) {
    state = 4;
  } else {
    state = false;
  }

  this.setState({
    collapse: !this.state.collapse,
    accordion: state});
}


// Slide out buttons event handlers
handleToggleClickA(){
  this.setState({
    toggleStateA: !this.state.toggleStateA
  })
}
onClick(){
    this.setState({
        collapse: !this.state.collapse,
    });
}

toggle() {
    this.setState({
        dropdownOpen: !this.state.dropdownOpen
    });
}

render() {
  const isOpenWithButtonA = this.state.toggleStateA;
  const navStyle = { backgroundColor: "#3f5c80", color: "#fff"}
  const sideStyle = { backgroundColor: '#6a9ed3', width: "100%"}
  const mainStyle={margin: "0 auto", maxWidth: "1000px", paddingTop: '5.5rem'};
  const button1 = <div href="#!" onClick={this.handleToggleClickA} key="sideNavToggleA" style={{lineHeight: '32px', marginRight: '1em', verticalAlign: 'middle'}}><Fa icon="bars" color="white" size="2x"></Fa></div>
  const specialCaseNavbarStyles = {WebkitBoxOrient: 'horizontal', flexDirection: 'row'};
    return (
        <Router>
          <div className="mt-5">
            <SideNav logo="https://mdbootstrap.com/img/logo/mdb-transparent.png" isOpenWithButton={isOpenWithButtonA} breakWidth={1300} style={sideStyle}>
              <li>
                <ul className="social">
                  <li><a href="#!"><Fa icon="facebook"></Fa></a></li>
                  <li><a href="#!"><Fa icon="pinterest"></Fa></a></li>
                  <li><a href="#!"><Fa icon="google-plus"></Fa></a></li>
                  <li><a href="#!"><Fa icon="twitter"></Fa></a></li>
                </ul>
              </li>
              <SideNavNav>
                <SideNavCat name="Submit blog" onClick={this.onClick0} isOpen={this.state.accordion === 0 } icon="chevron-right">
                    <SideNavItem>Submit listing</SideNavItem>
                    <SideNavItem>Registration form</SideNavItem>
                </SideNavCat>
                <SideNavCat name="Instruction" onClick={this.onClick1} isOpen={this.state.accordion === 1 } icon="hand-pointer-o">
                  <SideNavItem>For bloggers</SideNavItem>
                  <SideNavItem>For authors</SideNavItem>
                </SideNavCat>
                <SideNavCat name="About" onClick={this.onClick2} isOpen={this.state.accordion === 2 } icon="eye">
                  <SideNavItem>Instruction</SideNavItem>
                  <SideNavItem>Monthly meetings</SideNavItem>
                </SideNavCat>
                <SideNavCat name="Contact me" onClick={this.onClick3} isOpen={this.state.accordion === 3 } icon="envelope-o">
                  <SideNavItem>FAQ</SideNavItem>
                  <SideNavItem>Write a message</SideNavItem>
                </SideNavCat>
              </SideNavNav>
            </SideNav>
            <Navbar style={navStyle} dark expand="md" fixed="top">
              <NavbarNav left>
              <NavItem>
                    {button1}
              </NavItem>
                <NavItem className="d-none d-md-inline" style={{paddingTop: 5}}>
                    <strong>Material Design for Bootstrap</strong>
                </NavItem>
              </NavbarNav>
              <NavbarNav right style={specialCaseNavbarStyles}>
                <NavItem active>
                    <NavLink to="#!"><Fa icon="envelope" className="d-inline-inline"/>  <div className="d-none d-md-inline">Contact</div></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="#!"><Fa icon="comments-o" className="d-inline-inline"/> <div className="d-none d-md-inline">Support</div></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="#!"><Fa icon="user" className="d-inline-inline"/>  <div className="d-none d-md-inline">Account</div></NavLink>
                </NavItem>
                <NavItem>
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle nav caret> <div className="d-none d-md-inline">Dropdown</div></DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem href="#!">Action</DropdownItem>
                      <DropdownItem href="#!">Another Action</DropdownItem>
                      <DropdownItem href="#!">Something else here</DropdownItem>
                      <DropdownItem href="#!">Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
              </NavbarNav>
            </Navbar>
            <main style={mainStyle}>
              <Container fluid style={{height: 2000}} className="mt-5">
                <h2>Advanced Double Navigation with fixed SideNav & fixed Navbar:</h2><br/>
                <h5>1. Fixed side menu, hidden on small devices.</h5>
                <h5>2. Fixed Navbar. It will always stay visible on the top, even when you scroll down.</h5>
              </Container>
            </main>
            </div>
        </Router>
    );
  }
};

export default DoubleNavigationWithFixedSideNavFixedNavbar;