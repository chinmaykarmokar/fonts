import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardDisplay from './FontMods/Card_ex'
import Search from './FontMods/search'
import Footer from './FontMods/footer'
import Cookie from './FontMods/Cookie'
import Roboto from './FontMods/Roboto'
import Niconne from './FontMods/Niconne'
import Montserrat from './FontMods/Montserrat'
import Sriracha from './FontMods/Sriracha'
import Teko from './FontMods/Teko'
import Poppins from './FontMods/Poppins'
import Pangolin from './FontMods/Pangolin'
import Noto from './FontMods/Noto'
import Lato from './FontMods/Lato'
import Ubuntu from './FontMods/Ubuntu'
import PTSans from './FontMods/PTSans'
import Notable from './FontMods/Notable'
import Piedra from './FontMods/Piedra'
import Yellowtail from './FontMods/Yellowtail'
import FiraSans from './FontMods/FiraSans'
import Oxygen from './FontMods/Oxygen'
import Saira from './FontMods/Saira'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';

class App extends React.Component{
  state = {
    fonts : [
      { value : "It is a pretty day" , font : "Cookie" , route : "/cookie" },
      { value : "It is a pretty day" , font : "Roboto" , route : "/roboto" },
      { value : "It is a pretty day" , font : "Niconne" , route : "/niconne" },
      { value : "It is a pretty day" , font : "Montserrat" , route : "/montserrat" },
      { value : "It is a pretty day" , font : "Sriracha" , route : "/sriracha" },
      { value : "It is a pretty day" , font : "Teko" , route : "/teko" },
      { value : "It is a pretty day" , font : "Poppins" , route : "/poppins" },
      { value : "It is a pretty day" , font : "Pangolin" , route : "/pangolin" },
      { value : "It is a pretty day" , font : "Noto" , route : "/noto" },
      { value : "It is a pretty day" , font : "Lato" , route : "/lato" },
      { value : "It is a pretty day" , font : "Ubuntu" , route : "/ubuntu" },
      { value : "It is a pretty day" , font : "PT Sans, PT Serif" , route : "/ptsans" },
      { value : "It is a pretty day" , font : "Notable" , route : "/notable" },
      { value : "It is a pretty day" , font : "Piedra" , route : "/piedra" },
      { value : "It is a pretty day" , font : "Yellowtail" , route : "/yellowtail" },
      { value : "It is a pretty day" , font : "Fira Sans" , route : "/firasans" },
      { value : "It is a pretty day" , font : "Oxygen" , route : "/oxygen" },
      { value : "It is a pretty day" , font : "Saira" , route : "/saira" }
    ],
    searchFont : ""
  }

  handleInput = (event) => {
    console.log(event.target.value);
    this.setState({ searchFont : event.target.value })
  }

  render(){

    let filterFont = this.state.fonts.filter((data) => {
      return data.font.toLowerCase().includes(this.state.searchFont.toLowerCase());
    });

    return (
      <Router>
        <div className = "App">
          <Search handleInput = {this.handleInput}/>
          <Switch>
            <Route path = "/" exact component = {CardDisplay}>
                <CardDisplay 
                  filteredFont = {filterFont}
                />
            </Route>

            <Route path = {this.state.fonts[0].route} component = {Cookie}></Route>
            <Route path = {this.state.fonts[1].route} component = {Roboto}></Route>
            <Route path = {this.state.fonts[2].route} component = {Niconne}></Route>
            <Route path = {this.state.fonts[3].route} component = {Montserrat}></Route>
            <Route path = {this.state.fonts[4].route} component = {Sriracha}></Route>
            <Route path = {this.state.fonts[5].route} component = {Teko}></Route>
            <Route path = {this.state.fonts[6].route} component = {Poppins}></Route>
            <Route path = {this.state.fonts[7].route} component = {Pangolin}></Route>
            <Route path = {this.state.fonts[8].route} component = {Noto}></Route>
            <Route path = {this.state.fonts[9].route} component = {Lato}></Route>
            <Route path = {this.state.fonts[10].route} component = {Ubuntu}></Route>
            <Route path = {this.state.fonts[11].route} component = {PTSans}></Route>
            <Route path = {this.state.fonts[12].route} component = {Notable}></Route>
            <Route path = {this.state.fonts[13].route} component = {Piedra}></Route>
            <Route path = {this.state.fonts[14].route} component = {Yellowtail}></Route>
            <Route path = {this.state.fonts[15].route} component = {FiraSans}></Route>
            <Route path = {this.state.fonts[16].route} component = {Oxygen}></Route>
            <Route path = {this.state.fonts[17].route} component = {Saira}></Route>
          </Switch>
          <Footer/>
        </div>
      </Router>
    )  
  }
}

export default App;
