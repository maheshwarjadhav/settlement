import React, {Component} from 'react';
import './App.css';
import Login from './components/Login';
import Main from './components/Main';
import Header from './components/Header';
import FileUpload from './components/FileUpload';

import './css/header.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
        
        <div>
       
        	
                 
        <Login/>
        
        
      </div>
            
        );
    }
}
export default App;