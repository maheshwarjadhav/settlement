/**
 * Created by kgehlot on 4/20/2018.
 */
import React, {Component} from 'react';
import './../css/login.css';
import logo from './../img/discover-logo.png';
import {Redirect} from 'react-router';
import { login} from '../actions/loginAction';
import {connect} from 'react-redux';
import {loginConstants} from '../constants/DlosConstants';
import {loginUIlabel} from '../constants/UILabel';
import Header from '../components/Header';

const error = {
    margin: 'auto',
    padding: '10px',
    color: 'red',
    fontSize: '13px'
};
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uname: "",
            password: "",
            extension: "",
            popoverOpen: false
        };
        this.handleUnameChange = this.handleUnameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleExtenChange = this.handleExtenChange.bind(this);
        this.loginClick = this.loginClick.bind(this);
        this.clearClick = this.clearClick.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.isCapsLockOn = this.isCapsLockOn(this);
        this.toggle = this.toggle.bind(this);
    }

    loginClick() {

        if (this.state.uname === "" && this.state.password !== "") {

            alert(loginConstants.PLS_ENTER_REF_ID);
        }
        else if (this.state.password === "" && this.state.uname !== "") {

            alert(loginConstants.PLS_ENTER_PASS);
        }
        else if (this.state.password === "" && this.state.uname === "") {
            alert(loginConstants.PLS_ENTER_BOTH);
        } else {
            this.props.login(this.state.uname, this.state.password);
        }
        
    }

    onFocus() {
        this.setState({
            type: 'text'
        });
    }


    isCapsLockOn(e) {
        let keyCode = e.keyCode ? e.keyCode : e.which;
        let shiftKey = e.shiftKey ? e.shiftKey : ((keyCode === 16) ? true : false);
        return (((keyCode >= 65 && keyCode <= 90) && !shiftKey) || ((keyCode >= 97 && keyCode <= 122) && shiftKey))
    }

    showCapsLockMsg(e) {
        let warningElement = document.getElementById('capsLockWarning');
        if (this.isCapsLockOn(e))
            warningElement.style.display = 'block';
        else
            warningElement.style.display = 'none';
    }


    clearClick() {
        this.setState({uname: ""});
        this.setState({password: ""});
        this.setState({extension: ""});
    }

    handleUnameChange(event) {
        this.setState({uname: event.target.value});
        let output =event.target.value;
        if(output.length>=7){
            this.password.focus();
        }

    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
        let value = event.target.value;
        if (value.toUpperCase() === value && value.toLowerCase() !== value) {

        }

    }

    handleExtenChange(event) {
        this.setState({extension: event.target.value});
    }

    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.loginClick();
        }
    };

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }
    componentDidMount(){
        this.nameInput.focus();
    }

    render() {
        if (this.props.status) {
            return <Redirect push to='/Main'/>
        }
        return (
       
        <div className="main-container mobile-responsive" style={{marginTop: "64px"}}>
       <Header/>
        <main className="container main-content" id="main-content-rwd">
        <h1 id="login-new-header">Log in to Certify SDI </h1>
        <div align="center" className="row login-wrapper">
            <div className="col-md-4 col-sm-5 col-xs-12">
                        <div className="login-container content-login" data-id="content-login">
                            <p className="modal-headline" role="heading">Secure Account Log In<i className="icon-secure"></i></p>
                            <p className="errors" aria-hidden="true">Please complete all fields below</p>                                
                                <div className="input-wrapper">
                                        <label htmlFor="userid-content" className="sr-only" aria-hidden="true">User ID</label>
                                        <input type="text" className="form-control placeholder-text userid" name="userID" id="userid-content" ref={(input) => {this.nameInput = input;}} value={this.state.uname} onChange={this.handleUnameChange} placeholder="User ID" aria-required="true" data-toggle="popover" data-content="Please enter your User ID" maxLength="16" />
                                     	<i className="icon-error-triangle"></i>
                                </div>
                                <div className="input-wrapper">
                                        <label htmlFor="password-content" className="sr-only" aria-hidden="true">Password</label>
                                        <input type="password" className="form-control placeholder-text password" name="password" ref={(input) => { this.password = input; }} onClick={this.toggle} value={this.state.password} onChange={this.handlePasswordChange} id="password-content" placeholder="Password" aria-required="true" data-toggle="popover" data-content="Please enter your Password" maxLength="32" />
                                </div>
                                <div className="custom-checkbox">
                                        <span className="icon-checkbox custom-element">
                                                <input type="checkbox" name="rememberOption" id="id-checkbox" className="custom-input remember-id" value="on" />&nbsp;
                                        </span>
                                        <label htmlFor="id-checkbox">Remember User ID</label>
                                </div>   
                                <input type="submit" className="btn-primary log-in-button" value="Log In" id="log-in-button"  onClick={this.loginClick} accessKey="l"/>                                
                        </div>
                  </div>
                  <div className="col-md-8 col-sm-7 col-xs-12">
				   <div data-omu="true" data-pagename="Log_In_Responsive" data-areaid="Box_1" data-anitype="slidedown" className="dmp-slide">
				      <div className="login-web-target">				         
				         <div className="logincard-image-discover"></div>      
				      </div>
				      
				   </div>
				</div>
          </div>
          </main>
          
          </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log("mapStateTOProps");
    return {
        status: state.reducerLogin.isLoginSuccess,
        error : state.reducerLogin.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (uname, password) => {
            dispatch(login(uname, password));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

