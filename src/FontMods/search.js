import React from 'react';
import ReactDOM from 'react';
import './cards.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Cards from './Cards'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const search = (props) => {

	return(
		<div>
		 <Navbar className = "search" expand="lg">
		   <Navbar.Brand href="#home">My Fonts</Navbar.Brand>
		   <Navbar.Toggle aria-controls="basic-navbar-nav" className = "toggs"/>
		   <Navbar.Collapse id="basic-navbar-nav" className = "justify-content-end">
		    	<input onChange = {props.handleInput} type = "text" className = "input_field" placeholder = "Search for a font"/>
		   </Navbar.Collapse>
		 </Navbar>
		</div>
	)	
}



export default search;