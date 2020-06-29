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
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'

const search = (props) => {

	return(
		<div>
		 <Navbar fixed = "top" className = "search" expand="lg">
		   <Navbar.Brand href="#">
		   		<Link to = "/" style = {{fontFamily:"Russo One", color:"#000", textDecoration:"none"}}>Fonts On</Link>
		   </Navbar.Brand>
		   <Navbar.Toggle aria-controls="basic-navbar-nav" className = "toggs"/>
		   <Navbar.Collapse id="basic-navbar-nav" className = "justify-content-end">
		    	<FaSearch className = "search_icon"/><input onChange = {props.handleInput} type = "text" className = "input_field" placeholder = "Search for a font"/>
		   </Navbar.Collapse>
		 </Navbar>
		</div>
	)	
}



export default search;