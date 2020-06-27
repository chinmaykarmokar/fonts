import React from 'react';
import ReactDOM from 'react';
import './cards.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Cards from './Cards'

const FontList = (props) => {
	let font = props.filteredFont.map((data,i) => {
		return <Cards 
			key = {i}
			value = {data.value}
			font = {data.font}
			route = {data.route}
			component = {data.component}
		/>
	}).sort()
	return(
		<div>
			{font}
		</div>
	)
}



export default FontList;	