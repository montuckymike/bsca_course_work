import React, { Component } from 'react';
import './App.css';
import {NavBar, Header, Content, Contact} from "./components";
import "./components/styles.css"

const about = "This is a story all about how my life got flipped turned upside down";
const info = {
  name: "Fresh Prince",
  phone: "867-5309",
  email: "freshP@bellaire.com",
  img: "https://i0.wp.com/media2.slashfilm.com/slashfilm/wp/wp-content/images/Will-Smith-in-The-Fresh-Prince-of-Bel-Air.png",
}

class App extends Component {
  render() {
    return (
      <div className="main-app">
        <NavBar />
        <Header title={"Fresh Prince"} headerMsg={"of Bellaire's Life Story"} className="header"/>
        <Content about={about} />
        <Contact info={info} />
      </div>
    )
  }
}

export default App;
