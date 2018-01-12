import React, { Component } from 'react';
import Logo from "./logo.png";
import { Route, Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
    
    <div>
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">MedGram</a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                    <li role="presentation" id="homeHyperlink" className="active"><a href="#">Home</a></li>
                    <li role="presentation" id="addHyperLink"><a href="/home#/addPost">Add</a></li>
                    <li role="presentation" id="profileHyperlink"><a href="/home#/showProfile">Profile</a></li>
                    <li role="presentation" id="tagHyperlink"><a href="/home#/addTag">Tag</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li role="presentation"><Link to="/"><span className="glyphicon glyphicon-user"></span> Logout</Link></li>
                </ul>
            </div>
            </div>
        </nav>
    </div>

    );
  }
}

export default App;