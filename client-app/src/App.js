import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Button } from "react-bootstrap";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';



import Home from "./page/user/Home";
import SignUp from "./page/user/SignUp";
import Login from "./page/user/Login";
import Logout from "./page/user/Logout";
import Profile, {EditProfile, CreateProfile} from "./page/user/Profile";
import NavBar from "./static/NavBar";
import EventAdd from "./page/event/EventAdd";
import EventList, { SingleEvent } from "./page/event/EventList";

// const URL = `https://127.0.0.1:5000/`
export default class App extends React.Component {
  constructor(props) {
    super(props);
    const existingToken = localStorage.getItem('token');
    const accessToken = (window.location.search.split("=")[0]==="?api_key") ? window.location.search.split("=")[1] : null;
    this.state = {
      isloading:true,
      events: {},
      blogs: {},
      users: {},
      profiles: {},
      comments: {},
      news: {},
      user:{isSignin:false},
    }

    if (!accessToken && !existingToken){
        window.location.replace(`localhost:3000/`)
    };

    if (accessToken) {
        localStorage.setItem('token', accessToken);
    };
    
    this.setState ({
      token: existingToken || accessToken,
      user:{isSignin:false}
    })
  }
  
  componentDidMount() {
    this.fetchhome()
    this.fetchUser()
  }
  fetchhome = async () => {
    const a = await fetch('https://127.0.0.1:5000/',{
      headers: {
        "Content-Type": "application/json"
      }
    })
    const b = await a.json()
    console.log("check b", b)
    console.log("check b status", b.map((c) =>c.status))
    console.log("check b event", b.map((c) =>c.event))
    
  }
  
  fetchUser= async() =>{
    const a = await fetch('https://127.0.0.1:5000/getuserinfo',{
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${this.state.token}`
      }
    })
    const b = await a.json()
    if (b.status === 200) {
      b.user.isSignin= true;
      b.user.token = this.state.token
      this.setState({isloading:true,user:b.user, events:b.event})
    }
  }

  getToken = (token) => {
    this.setState({token : token})
    
  }

  render() {
    console.log('check state', this.state)
    console.log('check events', this.state.events)
    return (
      <div className="App">
        <Router>
            <NavBar user = {this.state.user} />
            
  
          <div className="mag-top">
            <Route path="/profile/" exact component={ (props) => {if(this.state.user.isSignin === true) { 
              return <Profile {...props} user = {this.state.user}/>
             }else{ return <Login {...props} getToken = {this.getToken}/>}}}/>

            <Route path="/profile/create/" component ={(props)=> {if(this.state.user.isSignin === true) { 
              return <CreateProfile {...props} user = {this.state.user}/>
             }else{ return <Login {...props} getToken = {this.getToken}/>}}}/>

            <Route path="/profile/edit/" component ={(props)=> {if(this.state.user.isSignin === true) { 
              return <EditProfile {...props} user = {this.state.user}/>
             }else{ return <Login {...props} getToken = {this.getToken}/>}}}/>

            <Route path="/logout/" component= { (props) => {if(this.state.user.isSignin === true) { 
              return <Logout {...props} token = {this.state.token}/>
             }else{ return <Login {...props} getToken = {this.getToken}/>}}}/>
            {this.state.user.isSignin ? 
            <></>:<>
            <Route path="/register/" component={SignUp} />
            <Route path="/login/" component={ (props) => <Login {...props} getToken = {this.getToken} />}/>
            </>}
            <Route path="/" exact component={Home}/>
            <Route path="/events/" exact component={Events} />
            <Route path="/event/add" component={ (props) => <EventAdd {...props} user = {this.state.user} />} />
            <Route path="/event/list" component={ (props) => <EventList {...props} user = {this.state.user} />} />
            <Route path="/event/single/" component={ (props) => <SingleEvent {...props} user = {this.state.user} />} />
            <Route path="/studio/" exact component={Studio} />
            <Route path="/workshop/" component={Workshop} />

            <Route path="/courses/" component={Courses} />
            <Route path="/about/" component={About} />
          </div>
  
          <div className="modal-footer">Mors Chen</div>
        </Router>
      </div>
    );
  }
 
}

function Events() {
  return <div className="FullContent"> Events </div>;
}

function Studio() {
  return <div className="FullContent"> Studio </div>;
}

function Workshop() {
  return <div className="FullContent"> Workshop </div>;
}

function Courses() {
  return <div className="FullContent"> Courses </div>;
}

function About() {
  return <div className="FullContent"> ABOUT</div>;
}
