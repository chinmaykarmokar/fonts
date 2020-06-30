import React from 'react';
import ReactDOM from 'react';
import './cards.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import './Fonts.css';
import { Link } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'

class AlertIt extends React.Component{
	render(){
		return(
			<Alert variant="success" style = {{fontSize : "12px"}}>
			    Fonts Bay is a Google Fonts prototype created for the sole purpose of learning. All rights belong completely with Google.
			</Alert>
		)
	}
}

export default AlertIt;