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


const cards = (props) => {

	return(
	<div>
		<Container>
			<Row>
				<Col md = {4}>
					<Col md = {12}>
						<Card className = "Info">
					  		<Card.Body>
					    		<Card.Title><b>Developer</b></Card.Title>
					    		<Card.Subtitle className="mb-2 text-muted names"><i>Chinmay</i></Card.Subtitle>
					    		<hr/>
					    		<Card.Text>
					     			18 styles 
					    		</Card.Text>
					  		</Card.Body>
						</Card>
					</Col>
				</Col>
				<Col md = {8}>	
					<Col md = {12}>
					<Link to = {props.route}>
						<Card className = "Cards">
					  		<Card.Body>
					    		<Card.Title>{props.font}</Card.Title>
					    		<Card.Subtitle className="mb-2 text-muted">Tap to use </Card.Subtitle>
					    		<hr/>
					    		<Card.Text style = {{fontFamily : props.font}}>
					     			{props.value} 
					    		</Card.Text>
					  		</Card.Body>
						</Card>
					</Link>
					</Col>
				</Col>	
			</Row>
		</Container>
	</div>
	)
}

export default cards;