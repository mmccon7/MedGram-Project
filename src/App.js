import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Survey from './survey';
import Logo from "./logo.png";
import Profile from './profile';

function Home() {
  return (
    <div>
      <div className="container">
        <div className="jumbotron text-center">
          <h1>MedGram</h1>
          <img src={Logo} alt="MedGram"/>
          <h2>Connect with those who understand</h2>
        </div>
      </div>
        <form className="form-signin col-md-6 col-md-offset-3">
          <h2 className="form-signin-heading">Please Log In</h2>
          <label for="inputEmail" className="sr-only">Email address</label>
          <input type="email" /*onChange={this.handleEmailChange}*/ id="inputEmail" className="form-control" placeholder="Email address" required />
          <label for="inputPassword" className="sr-only">Password</label>
          <input type="password" /*onChange={this.handlePasswordChange}*/ id="inputPassword" className="form-control" placeholder="Password" required />
          <Link to="/profile"><button className="btn btn-lg btn-primary btn-block" /*onClick={this.signIn}*/ type="button">Log In</button></Link>
        </form>
        <Link to="/register">Register for MedGram</Link>
        <br/> 
    </div>
  );
}

function Register() {
  return (
      <div>
          <div className="container">
            <div className="jumbotron text-center">
              <h1>MedGram</h1>
              <img src={Logo} alt="MedGram"/>
              <h2>Connect with those who understand</h2>
            </div>
          </div>
          <form className="form-signin col-md-6 col-md-offset-3">
            <h2 className="form-signin-heading">Register for MedGram!</h2>
            <label for="inputName" className="sr-only">Name</label>
            <input type="name" id="inputName" className="form-control" placeholder="Name" required />
            <label for="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
            <label for="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
          
             <Link to="/survey"><button className="btn btn-lg btn-primary btn-block" /*onClick={this.signIn}*/ type="button">Register</button></Link>
          </form>
          <div>
            <Link to="/">Sign In</Link>
          </div>
      </div>
  );
}

class App extends Component {
  render() {
    return (
      <div>
      {/*        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>*/}
        <hr/>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/survey" component={Survey} />
        <Route path="/register" component={Register} />
      </div>
    );
  }
}

export default App;
