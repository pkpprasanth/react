import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom'
import Newhome from './home/newhome';
import Team from './home/team';
import Toto from './home/toto';
import Image from './home/image';
import Form from './home/form';
import Axios from './home/axios';

const routing = (
  <Router>
   <Switch>
    <div>
       <nav class="navbar">
          <ul class="main-nav" id="js-menu">
            <li><NavLink class="nav-links" exact activeStyle={{color:"Green"}} to='/'>Home</NavLink></li>
            <li><Link  class="nav-links" exact activeClassName="current" to='/axios'>Axios</Link></li>
            <li><Link  class="nav-links" exact activeClassName="current" to='/toto'>toto</Link></li>
            <li><Link class="nav-links" exact activeClassName="current" to='/team'>team</Link></li>
            <li><Link class="nav-links" exact activeClassName="current" to='/image'>Image</Link></li>
            <li><Link class="nav-links" exact activeClassName="current" to='/form'>Form</Link></li>


          </ul>
        </nav>

      <h1>Welcome to prograd</h1>
      <Route exact path="/" component={Newhome}/>
      <Route exact path="/team" component={Team}/>
      <Route exact path="/toto" component={Toto}/>
      <Route exact path="/image" component={Image}/>
      <Route exact path="/form" component={Form}/>
      <Route exact path="/axios" component={Axios}/>
      {/* <Route component={Notfound}/> */}
    </div>
    </Switch>
  </Router>
)
ReactDOM.render(routing,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//  serviceWorker.unregister();
