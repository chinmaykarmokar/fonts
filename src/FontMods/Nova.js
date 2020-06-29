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

class Nova extends Component{

	state = {
		showFonts : [
			{value : "All work no play makes jack a dull boy" , family : "Nova Square" , css : "Nova+Square"},
			{value : "All work no play makes jack a dull boy" , family : "Nova Mono" , css : "Nova+Mono"},
			{value : "All work no play makes jack a dull boy" , family : "Nova Round" , css : "Nova+Round"},
			{value : "All work no play makes jack a dull boy" , family : "Nova Slim" , css : "Nova+Slim"},
			{value : "All work no play makes jack a dull boy" , family : "Nova Flat" , css : "Nova+Flat"},
			{value : "All work no play makes jack a dull boy" , family : "Nova Cut" , css : "Nova+Cut"},
			{value : "All work no play makes jack a dull boy" , family : "Nova Oval" , css : "Nova+Oval"},
			{value : "All work no play makes jack a dull boy" , family : "Nova Script" , css : "Nova+Script"},
		],	
		showMenu : false
	}

	handleInput = (e) => {
		this.setState({
			showFonts : [
				{value : e.target.value , family : "Nova Square" , btn : "+ Select style"},
				{value : e.target.value , family : "Nova Mono" , btn : "+ Select style"},
				{value : e.target.value , family : "Nova Round" , btn : "+ Select style"},
				{value : e.target.value , family : "Nova Slim" , btn : "+ Select style"},
				{value : e.target.value , family : "Nova Flat" , btn : "+ Select style"},
				{value : e.target.value , family : "Nova Cut" , btn : "+ Select style"},
				{value : e.target.value , family : "Nova Oval" , btn : "+ Select style"},
				{value : e.target.value , family : "Nova Script" , btn : "+ Select style"},
			]
		})
	}

	handleMenu = () => {
		this.setState({showMenu : true});	
	}

	render(){
		return(
			<div className = "AllFonts">
				<div className = "fontBodyn">
					<h1>Nova</h1>
					<p>Designed by <b>Wojciech Kalinowski</b></p>
					<br/>
					<hr/>
					<br/>
				</div>
				<br/>
				<div className = "f_work">	
					<h1>Styles</h1>
					<br/>
					<label>Type in!</label>
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
				 	family : "Nova Square",
				 	src : "Source Code Pro",
				 	b1 : "<",
				 	b2 : ">",
				 	css : "Nova+Square"
				},
				{
					value : "All work no play makes jack a dull boy" , 
				 	family : "Nova Mono",
				 	src : "Source Code Pro", 
				 	b1 : "<",
				 	b2 : ">",
				 	css : "Nova+Mono"
				},
				{
					value : "All work no play makes jack a dull boy" , 
				 	family : "Nova Round",
				 	src : "Source Code Pro",
				 	b1 : "<",
				 	b2 : ">",
				 	css : "Nova+Round"
				},
				{
					value : "All work no play makes jack a dull boy" , 
				 	family : "Nova Slim",
				 	src : "Source Code Pro",
				 	b1 : "<",
				 	b2 : ">",
				 	css : "Nova+Slim"
				},
				{
					value : "All work no play makes jack a dull boy" , 
				 	family : "Nova Flat",
				 	src : "Source Code Pro",
				 	b1 : "<",
				 	b2 : ">",
				 	css : "Nova+Flat"
				},
				{
					value : "All work no play makes jack a dull boy" , 
				 	family : "Nova Cut",
				 	src : "Source Code Pro",
				 	b1 : "<",
				 	b2 : ">",
				 	css : "Nova+Cut"
				},
				{
					value : "All work no play makes jack a dull boy" , 
				 	family : "Nova Oval",
				 	src : "Source Code Pro",
				 	b1 : "<",
				 	b2 : ">",
				 	css : "Nova+Oval"
				},
				{
					value : "All work no play makes jack a dull boy" , 
				 	family : "Nova Slim",
				 	src : "Source Code Pro",
				 	b1 : "<",
				 	b2 : ">",
				 	css : "Nova+Slim"
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

export default Nova;