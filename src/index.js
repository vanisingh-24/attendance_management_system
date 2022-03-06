import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import StudentComponent from './components/login/student';
import TeacherComponent from './components/login/teacher';
// import DashboardComponent from './components/dashboard/dashboard';


const routing = (
    <Router>
        
        <Switch>
            <Route path="/" exact component={StudentComponent} />
            <Route path="/" component={TeacherComponent} />
            {/* <Route path="/dashboard" component={DashboardComponent} /> */}
        </Switch>
    </Router>
)

ReactDOM.render( routing, document.getElementById('root'));