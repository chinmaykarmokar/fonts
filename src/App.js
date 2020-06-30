import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardDisplay from './FontMods/Card_ex'
import Search from './FontMods/search'
import Footer from './FontMods/footer'
import AlertIt from './FontMods/Alert'
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
import Source from './FontMods/Source'
import IBMPlex from './FontMods/IBMPlex'
import Libre from './FontMods/Libre'
import Barlow from './FontMods/Barlow'
import Archivo from './FontMods/Archivo'
import DmSans from './FontMods/DM'
import Cabin from './FontMods/Cabin'
import Nanum from './FontMods/Nanum'
import Encode from './FontMods/Encode'
import Alegreya from './FontMods/Alegreya'
import Bungee from './FontMods/Bungee'
import Nova from './FontMods/Nova'
import OpenSans from './FontMods/OpenSans'
import { HashRouter, Switch, Route } from 'react-router-dom'

import './App.css';

class App extends React.Component{
  state = {
    fonts : [
      { value : "It is a pretty day" , font : "Cookie" , route : "/cookie" , developer : "Ania Kruk" , style : "1 style" },
      { value : "It is a pretty day" , font : "Roboto" , route : "/roboto" , developer : "Christian Robertson" , style : "4 styles" },
      { value : "It is a pretty day" , font : "Niconne" , route : "/niconne" , developer : "Vernon Adams" , style : "1 style" },
      { value : "It is a pretty day" , font : "Montserrat" , route : "/montserrat" , developer : "Various Developers" , style : "3 styles" },
      { value : "It is a pretty day" , font : "Sriracha" , route : "/sriracha" , developer : "Cadson Demak" , style : "1 style" },
      { value : "It is a pretty day" , font : "Teko" , route : "/teko" , developer : "Indian Type Foundry" , style : "1 style" },
      { value : "It is a pretty day" , font : "Poppins" , route : "/poppins" , developer : "Indian Type Foundry" , style : "1 style" },
      { value : "It is a pretty day" , font : "Pangolin" , route : "/pangolin" , developer : "Kevin Burke" , style : "1 style" },
      { value : "It is a pretty day" , font : "Noto" , route : "/noto" , developer : "Google" , style : "11 styles" },
      { value : "It is a pretty day" , font : "Lato" , route : "/lato" , developer : "Łukasz Dziedzic" , style : "1 style" },
      { value : "It is a pretty day" , font : "Ubuntu" , route : "/ubuntu" , developer : "Dalton Maag" , style : "3 styles" },
      { value : "It is a pretty day" , font : "PT Sans, PT Serif" , route : "/ptsans" , developer : "ParaType" , style : "5 styles" },
      { value : "It is a pretty day" , font : "Notable" , route : "/notable" , developer : "Various Developers" , style : "1 style" },
      { value : "It is a pretty day" , font : "Piedra" , route : "/piedra" , developer : "Sudtipos" , style : "1 style" },
      { value : "It is a pretty day" , font : "Yellowtail" , route : "/yellowtail" , developer : "Astigmatic" , style : "1 style" },
      { value : "It is a pretty day" , font : "Fira Sans" , route : "/firasans" , developer : "Carrois Apostrophe" , style : "5 styles" },
      { value : "It is a pretty day" , font : "Oxygen" , route : "/oxygen" , developer : "Vernon Adams" , style : "2 styles" },
      { value : "It is a pretty day" , font : "Saira" , route : "/saira" , developer : "Omnibus-Type, Hector Gatti" , style : "5 styles" },
      { value : "It is a pretty day" , font : "Source" , route : "/source" , developer : "Paul D. Hunt, Frank Grießhammer" , style : "3 styles" },
      { value : "It is a pretty day" , font : "IBM Plex" , route : "/ibmplex" , developer : "Mike Abbink, Bold Monday" , style : "4 styles" },
      { value : "It is a pretty day" , font : "Libre Baskerville" , route : "/libre" , developer : "Impallari Type" , style : "4 styles" },
      { value : "It is a pretty day" , font : "Barlow" , route : "/barlow" , developer : "Jeremy Tribby" , style : "3 styles" },
      { value : "It is a pretty day" , font : "Archivo" , route : "/archivo" , developer : "Omnibus-Type" , style : "3 styles" },
      { value : "It is a pretty day" , font : "DM" , route : "/dmsans" , developer : "Colophon Foundry, Jonny Pinhorn" , style : "4 styles" },
      { value : "It is a pretty day" , font : "Cabin" , route : "/cabin" , developer : "Impallari Type" , style : "3 styles" },
      { value : "It is a pretty day" , font : "Nanum Gothic" , route : "/nanum" , developer : "Fontrix, Sandoll" , style : "4 styles" },
      { value : "It is a pretty day" , font : "Encode Sans" , route : "/encode" , developer : "Various Developers" , style : "5 styles" },
      { value : "It is a pretty day" , font : "Alegreya" , route : "/alegreya" , developer : "Impallari Type" , style : "4 styles" },
      { value : "It is a pretty day" , font : "Bungee" , route : "/bungee" , developer : "David Jonathan Ross" , style : "5 styles" },
      { value : "It is a pretty day" , font : "Nova" , route : "/nova" , developer : "Wojciech Kalinowski" , style : "8 styles" },
      { value : "It is a pretty day" , font : "Open Sans" , route : "/opensans" , developer : "Google" , style : "2 styles" }
    ],
    searchFont : ""
  }

  handleInput = (event) => {
    console.log(event.target.value);
    this.setState({ searchFont : event.target.value })
  }

  componentDidMount(){
        document.title = "Fonts Bay"
    }

  render(){

    let filterFont = this.state.fonts.filter((data) => {
      return data.font.toLowerCase().includes(this.state.searchFont.toLowerCase());
    });

    return (
      <HashRouter basename = "/">
        <div className = "App">
          <Search handleInput = {this.handleInput}/>
          <Switch>
            <Route path = "/" exact component = {CardDisplay}>
              <AlertIt/>
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
            <Route path = {this.state.fonts[18].route} component = {Source}></Route>
            <Route path = {this.state.fonts[19].route} component = {IBMPlex}></Route>
            <Route path = {this.state.fonts[20].route} component = {Libre}></Route>
            <Route path = {this.state.fonts[21].route} component = {Barlow}></Route>
            <Route path = {this.state.fonts[22].route} component = {Archivo}></Route>
            <Route path = {this.state.fonts[23].route} component = {DmSans}></Route>
            <Route path = {this.state.fonts[24].route} component = {Cabin}></Route>
            <Route path = {this.state.fonts[25].route} component = {Nanum}></Route>
            <Route path = {this.state.fonts[26].route} component = {Encode}></Route>
            <Route path = {this.state.fonts[27].route} component = {Alegreya}></Route>
            <Route path = {this.state.fonts[28].route} component = {Bungee}></Route>
            <Route path = {this.state.fonts[29].route} component = {Nova}></Route>
            <Route path = {this.state.fonts[30].route} component = {OpenSans}></Route>
          </Switch>
          <br/>
          <Footer/>
        </div>
      </HashRouter>
    )  
  }
}

export default App;
