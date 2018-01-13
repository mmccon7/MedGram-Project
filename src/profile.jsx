import React, { Component } from 'react';
import Logo from "./logo.png";
import './App.css';
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

        <div className="container-fluid text-center">
            <div className="row">
                <div className="col-sm-3 well">
                    <div className="well">
                        <p><a href="#">Kenny's Profile</a></p>
                        <img src="https://thumbs.dreamstime.com/b/cute-color-vector-illustration-beard-afro-black-guy-face-avatar-positive-young-black-guy-smiling-87383651.jpg " class="img-circle" height="65" width="65" alt="Avatar"/>
                    </div>
                    <div className="well">
                        <p><a href="#">Interests</a></p>
                        <p>
                            <span className="label label-default">News</span>
                            <span className="label label-primary">Symptoms</span>
                            <span className="label label-success">Drugs</span>
                            <span className="label label-info">Supplements</span>
                            <br/>
                            <span className="label label-warning">Healthy Living</span>
                            <span className="label label-danger">Communtiy</span>
                        </p>
                    </div>
                    <div className="alert alert-success fade in">
                        <a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>
                        <p><strong>Doctors</strong></p>
                        <p><a href="https://www.zocdoc.com/" target="_blank">Find doctors in your area.</a></p>
                    </div>
                    <p><a href="https://doctor.webmd.com/" target="_blank"><strong>Web MD</strong></a></p>
                </div>
                <div className="col-sm-7">
                    <button className="btn btn-default" role="presentation" id="addHyperLink"><a href="/home#/addPost">Add Post</a></button>
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2">
                            <h2>Community Feed</h2>
                            <hr/>
                        </div>
                    </div>
                    <div id="app" >
                
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="well">
                                <p>John Smith</p>
                                <img src="https://pickaface.net/gallery/avatar/Ognjen52341d1057cf1.png" class="img-circle" height="55" width="55" alt="Avatar"/>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="well">
                                <p>Anyone interested in volunteering at the hospital cancer center? The hospital is looking for volunteers to help with newly admitted patients. Message me if you want details!</p>
                                <p>at 6:15 PM yesterday</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="well">
                                <p>Eric Johnson</p>
                                <img src="https://pickaface.net/gallery/avatar/.2108558ad44e8ac1d.png" class="img-circle" height="55" width="55" alt="Avatar"/>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="well">
                                <p>Today I had 4 chocolate chip cookies... not so good for a guy who has diabetes but it was so worth it! </p>
                                <p>at 4:45 PM yesterday</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="well">
                                <p>Adam Brown</p>
                                <img src="https://pickaface.net/gallery/avatar/yousef76052bc84348cf65.png" class="img-circle" height="55" width="55" alt="Avatar"/>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="well">
                                <p>It's been a hard week, haven't had much energy to do anything but I love being able to spend time with family and friends.</p>
                                <p>at 3:25 PM yesterday</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="well">
                                <p>Jamie Reid</p>
                                <img src="https://www.wpclipart.com/people/female/women_6/woman_avatar.png" class="img-circle" height="55" width="55" alt="Avatar"/>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="well">
                                <p>Anyone have any ideas for good gluten free recipes on homemade bread? Celiac Disease is limiting my food options!</p>
                                <p>at 2:33 PM yesterday</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2 well">
                    <div className="thumbnail">
                        <p>Upcoming Meetups:</p>
                        <img src="http://livefromalounge.boardingarea.com/wp-content/uploads/2017/09/Meetup_square.png" alt="Meetups" width="400" height="300"/>
                        <p><strong>Chandler, AZ</strong></p>
                        <p>Fri. 3  2018</p>
                        <button class="btn btn-primary">Info</button>
                    </div>
                    <div className="well">
                        <p>Info</p>
                    </div>
                    <div className="well">
                        <p>Info</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
  }
}

export default App;