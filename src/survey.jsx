import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
       <div className="container">
            <h1 className="text-center">MedGram Survey</h1>
            <hr/>
            <h3 className="text-center">Please tell us a little bit about yourself</h3>
            <br/>
            <br/>
            <form action="/profile" id="survey-form" method="post">
                <div className="form-group">
                    <label for="q1" className="lead">Age</label>
                    <input type="text" className="form-control" id="name" required />
                </div>
                <br />
                <div className="form-group">
                    <label for="q2" className="lead">Sex</label>
                    <select id="q2" className="form-control" required>
                        <option value="select" default>Please select</option>
                        <option value="1">M</option>
                        <option value="2">F</option>
                    </select>
                </div>
                <br />
                <div className="form-group">
                    <label for="q3" className="lead">Whats your medical diagnosis?</label>
                    <select id="q3" className="form-control" required>
                        <option value="select" default>Please select</option>
                        <option value="1">Celiac</option>
                        <option value="2">Anemia</option>
                        <option value="3">Diabetes</option>
                        <option value="4">PTSD</option>
                        <option value="5">Cancer</option>
                    </select>
                </div>
                <br />
                <div className="form-group">
                    <label for="q4" className="lead">What brings you to medGram?</label>
                    <select id="q4" className="form-control" required>
                        <option value="select" default>Please select</option>
                        <option value="1">Information</option>
                        <option value="2">Find a doctor</option>
                        <option value="3">Socializing</option>
                        <option value="4">To meet people like me</option>
                        <option value="5">Just browsing</option>
                    </select>
                </div>
                <br/>
                <br/>
                <div className="col-sm-4 col-sm-offset-4">
                    <Link to="/profile"><button className="btn btn-lg btn-primary btn-block" type="button">Register Me!</button></Link>
                </div>
            </form>
        </div>

    );
  }
}

export default App;