import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import Login from './components/Login';
import Main from './components/Main';
import { Provider } from 'react-redux';

ReactDOM.render(

    <Provider store={store}>
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Main" component={Main} />
        </div>
    </Router>
        </Provider>,
        
        
    
    document.getElementById('root')
);

registerServiceWorker();
