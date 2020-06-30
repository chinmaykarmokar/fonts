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
import { FaGlobe } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const footer = (props) => {

	return(
		<div className = "foots">
			<Container fluid>
				<h3>About <h3 style = {{fontFamily:"Pacifico"}}>Fonts Bay</h3></h3>
				<hr/>
				<Row>
					<Col md = {6}>
						<h6 className = "bio">
							Fonts Bay is a Google Fonts prototype created for the sole purpose of learning.
							<br/>
							<br/>
							Fonts Bay uses 10.08 % of the families available on Google Fonts.
							<br/>
							Choose from a range of 100 different styles and enhance your website.
							<br/>
							<br/>
							This website is created with <FaReact/> ReactJS.
							<br/>
							<br/>
							All rights completely belong with <FaGoogle style = {{padding:"5px", fontSize:"25px"}}/>, 2020.
						</h6>
					</Col>
					<br/>
					<br/>
					<Col md = {1}></Col>
					<Col md = {5}>
						<h4>Connect with me</h4>
						<hr/>
						<FaGlobe style = {{fontSize:"40px",padding:"10px"}} className="d-inline float"/>
						<a style = {{padding:"10px", color:"#000"}} target = "_blank" className = "d-inline" href = "https://chinmaykarmokar.github.io/app/">Visit my portfolio</a>
						<br/>
						<a href="https://github.com/chinmaykarmokar/" target="_blank"><FaGithub style={{fontSize:"60px",padding:"10px"}}/></a>
						<a href="https://twitter.com/chinmaykarmokar" target="_blank"><FaTwitter style={{fontSize:"60px",padding:"10px"}}/></a>
						<a href="https://www.instagram.com/chinmay.js/" target="_blank"><FaInstagram style={{fontSize:"60px",padding:"10px"}}/></a>
					</Col>
				</Row>
			</Container>
		</div>
	)	
}



export default footer;