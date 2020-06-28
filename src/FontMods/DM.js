import React, {Component} from 'react';
import ReactDOM from 'react';
import './cards.css';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

class DmSans extends Component{

	state = {
		showFonts : [
			{value : "All work no play makes jack a dull boy" , family : "DM Sans" , css : "DM+Sans"},
			{value : "All work no play makes jack a dull boy" , family : "DM Mono" , css : "DM+Mono"},
			{value : "All work no play makes jack a dull boy" , family : "DM Serif Display" , css : "DM+Serif+Display"},
			{value : "All work no play makes jack a dull boy" , family : "DM Serif Text" , css : "DM+Serif+Text"},
		],	
		showMenu : false
	}

	handleInput = (e) => {
		this.setState({
			showFonts : [
				{value : e.target.value , family : "DM Sans" , btn : "+ Select style"},
				{value : e.target.value , family : "DM Mono" , btn : "+ Select style"},
				{value : e.target.value , family : "DM Serif Display" , btn : "+ Select style"},
				{value : e.target.value , family : "DM Serif Text" , btn : "+ Select style"}
			]
		})
	}

	handleMenu = () => {
		this.setState({showMenu : true});	
	}

	render(){
		return(
			<div className = "AllFonts">
				<div className = "fontBodydm">
					<h1>DM</h1>
					<p>Designed by <b>Colophon Foundry, Jonny Pinhorn</b></p>
					<br/>
					<hr/>
					<br/>
				</div>
				<br/>
				<div className = "f_work">	
					<h1>Styles</h1>
					<br/>
					<input className = "preview" type = "text" onChange = {this.handleInput} placeholder = "See font preview"/>
					<br/>
					<br/>
					<br/>
					{this.state.showFonts.map((data, index) => (
						<div className = "rowC">
							<Container fluid>
								<Row>
									<Col md = {12} className = "f_prev">
										<p style = {{color : "grey"}}>{data.family}</p>
										<h4 style = {{fontFamily : data.family}}>{data.value}</h4>
										<br/>											
									</Col>
								</Row>
							</Container>
						</div>	
					))}
						<div>
						<button onClick = {this.handleMenu}>Use style</button>
							<br/>
							<br/>
							<Container fluid>
								<Row>
									<br/>
									{this.state.showMenu ?
					    				<NewComponent /> :
					    			null
									}
								</Row>
							</Container>
						</div>	
				</div>
			</div>
		)
	}
}

	class NewComponent extends Component{

		state = {
			showFonts : [
				{
					value : "All work no play makes jack a dull boy" , 
				 	family : "DM Sans",
				 	src : "Source Code Pro",
				 	b1 : "<",
				 	b2 : ">",
				 	css : "DM+Sans"
				},
				{
					value : "All work no play makes jack a dull boy" , 
				 	family : "DM Mono",
				 	src : "Source Code Pro", 
				 	b1 : "<",
				 	b2 : ">",
				 	css : "DM+Mono"
				},
				{
					value : "All work no play makes jack a dull boy" , 
				 	family : "DM Serif Display",
				 	src : "Source Code Pro",
				 	b1 : "<",
				 	b2 : ">",
				 	css : "DM+Serif+Display"
				},
				{
					value : "All work no play makes jack a dull boy" , 
				 	family : "DM Serif Text",
				 	src : "Source Code Pro",
				 	b1 : "<",
				 	b2 : ">",
				 	css : "DM+Serif+Text"
				}
			],
			showMenu : false
		}

		render(){
			return(
				<div>
					
					{this.state.showFonts.map((data, index) => (
						
						<div>
							<Container>
								<Row>
									<Col md = {12}>
										<Card className = "MyCard">
										  	<Card.Body>
										    	<Card.Title><b>Embed {data.family}</b></Card.Title>
										    	<Card.Subtitle className="mb-2 text-muted names"></Card.Subtitle>
										    		<hr/>
										    	<Card.Text className = "rends">
										     		 <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
										     		   <Tab eventKey="home" title="<link>">
										     		   	<br/>
										     		     <p>
										     		     	To embed a font, copy the code into the {data.b1}head{data.b2} of your html.
										     		     </p>
										     		     <p style = {{fontFamily : data.src, fontSize : "11px"}}>
										     		     	{data.b1}link href="https://fonts.googleapis.com/css2?family={data.css}&display=swap" rel="stylesheet"{data.b2}
										     		     </p>
										     		   </Tab>
										     		   <Tab eventKey="profile" title="@import">
										     		   	 <br/>
										     		     <p>
										     		     	To embed a font, copy the code into the head of your html
										     		     </p>
										     		     <p style = {{fontFamily : data.src, fontSize : "11px"}}>
										     		     	@import url('https://fonts.googleapis.com/css2?family={data.css}&display=swap');
										     		     </p>
										     		   </Tab>
										     		 </Tabs>
										    	</Card.Text>
										  	</Card.Body>
										</Card>
										<br/>
									</Col>
								</Row>
							</Container>
						</div>	
					))}	
					
				</div>
			)
		}
}

export default DmSans;