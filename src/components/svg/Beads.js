import React from 'react';
import Colours from '../../data/colours.json';

const beadsIds = ['_x35__1_', '_x34__2_', '_x33_', '_x32__1_', '_x31__2_'];

class Beads extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			beadsArray          : [],
			randomColour1       : this.getRandomColour(),
			randomColour2       : this.getRandomColour(),
			colourPicked        : this.props.colourPicked,
		};

		// This binding is necessary to make `this` work in the callback
		this.checkRandomColoursAreNotSame = this.checkRandomColoursAreNotSame.bind(this);
		this.addToBeads = this.addToBeads.bind(this);
		this.handleClickOnBeadMain = this.handleClickOnBeadMain.bind(this);

		this.checkRandomColoursAreNotSame();
	}

	getRandomColour(){
		const coloursArray = [];

		Colours.colours.map((colour) =>
			coloursArray.push(colour.value)
		);

		const random = Math.ceil( Math.random() * (coloursArray.length - 1) + 1 );

		return coloursArray[random];
	}

	checkRandomColoursAreNotSame(){
		const rand1 = this.state.randomColour1;
		const rand2 = this.state.randomColour2;
		let newRandomColour = null;

		if(rand1 === rand2){
			newRandomColour = this.getRandomColour();
			this.setState({
				randomColour2: newRandomColour,
			});
		}
	}

	addToBeads(beadId){
		let beadsArray = this.state.beadsArray;

		beadsArray.push(beadId);

		this.setState({
			beadsArray : beadsArray,
		});
	}

	handleClickOnBeadMain(beadId){
		this.addToBeads(beadId);
		console.log(this.state.beadsArray);
	}

	render(){
		return(
			<g id="beads">
				<g id="cord_1_">
					<path d="M177.325,299.411c-30.891,0-62.776-4.156-112.969-54.35C35.179,215.884,17.29,143.623,11.187,30.285      C10.635,20.038,10.209,9.902,9.888,0l5.286,0c0.32,9.824,0.743,19.88,1.291,30.045c5.949,110.395,23.801,183.454,51.627,211.28      c48.764,48.764,79.495,52.803,109.232,52.803s60.469-4.039,109.234-52.803c27.826-27.826,45.679-100.886,51.627-211.28      C338.733,19.88,339.156,9.824,339.477,0L344.762,0c-0.321,9.901-0.746,20.038-1.298,30.285      c-6.104,113.338-23.992,185.599-53.169,214.776C240.101,295.255,208.216,299.411,177.325,299.411z"></path>
				</g>

				<g id="_x35__1_" onClick={(e) => this.handleClickOnBeadMain('_x35__1_', e)}>
					<g id="b_1_">
						<path fill="#00AAB5" style={ { fill: '#FFECB8' } } d="M329.916,223.551l-20.898-14.633L276.5,255.357l20.898,14.634c1.281,0.896,3.05,0.585,3.947-0.696        l29.266-41.797C331.509,226.216,331.197,224.447,329.916,223.551z"></path>
					</g>
					<g id="a_1_">
						<path fill="#FFECB8" style={ { fill: this.state.randomColour1 } } d="M288.12,194.285c-1.282-0.898-3.051-0.588-3.948,0.696l-29.266,41.796        c-0.896,1.281-0.585,3.048,0.696,3.947l20.897,14.633l32.518-46.439L288.12,194.285z"></path>
					</g>
				</g>

				<g id="_x34__2_" onClick={(e) => this.handleClickOnBeadMain('_x34__2_', e)}>
					<g id="b_2_">
						<path fill="#00AAB5" style={ { fill: this.state.randomColour2 } } d="M280.828,285.198l-12.756-22.093l-49.097,28.344l12.755,22.096c0.782,1.354,2.517,1.819,3.872,1.036        l44.188-25.511C281.146,288.286,281.609,286.552,280.828,285.198z"></path>
					</g>
					<g id="a_2_">
						<path fill="#FFECB8" style={ { fill: '#FFECB8' } } d="M255.316,241.011c-0.782-1.355-2.517-1.821-3.873-1.038l-44.188,25.511        c-1.354,0.782-1.819,2.517-1.035,3.871l12.755,22.093l49.097-28.344L255.316,241.011z"></path>
					</g>
				</g>

				<g id="_x33_" onClick={(e) => this.handleClickOnBeadMain('_x33_', e)}>
					<g id="b_3_">
						<path fill="#00AAB5" style={ { fill: this.state.randomColour1 } } d="M205.651,320.381v-25.512h-56.694v25.512c0,1.564,1.27,2.834,2.834,2.834h51.025        C204.382,323.215,205.651,321.945,205.651,320.381z"></path>
					</g>
					<g id="a_3_">
						<path fill="#FFECB8" style={ { fill: this.state.randomColour1 } } d="M205.651,269.357c0-1.565-1.27-2.835-2.835-2.835h-51.025c-1.564,0-2.834,1.27-2.834,2.835v25.512h56.694        V269.357z"></path>
					</g>
				</g>

				<g id="_x32__1_" onClick={(e) => this.handleClickOnBeadMain('_x32__1_', e)}>
					<g id="b_4_">
						<path fill="#00AAB5" style={ { fill: this.state.randomColour2 } } d="M122.88,313.545l12.755-22.094L86.54,263.104l-12.758,22.095c-0.781,1.354-0.316,3.089,1.037,3.871        l44.189,25.513C120.364,315.365,122.098,314.899,122.88,313.545z"></path>
					</g>
					<g id="a_4_">
						<path fill="#FFECB8" style={ { fill: '#FFECB8' } } d="M148.392,269.358c0.783-1.356,0.319-3.09-1.038-3.873l-44.188-25.513        c-1.354-0.781-3.089-0.316-3.871,1.039L86.54,263.104l49.096,28.347L148.392,269.358z"></path>
					</g>
				</g>

				<g id="_x31__2_" onClick={(e) => this.handleClickOnBeadMain('_x31__2_', e)}>
					<g id="b">
						<path fill="#00AAB5" style={ { fill: '#FFECB8' } } d="M57.218,269.993l20.898-14.633L45.599,208.92l-20.9,14.632c-1.279,0.898-1.592,2.666-0.696,3.947        l29.267,41.797C54.169,270.578,55.937,270.889,57.218,269.993z"></path>
					</g>
					<g id="a">
						<path fill="#FFECB8" style={ { fill: this.state.randomColour1 } } d="M99.014,240.727c1.282-0.898,1.595-2.665,0.696-3.948l-29.266-41.796        c-0.896-1.281-2.665-1.593-3.946-0.695L45.599,208.92l32.517,46.439L99.014,240.727z"></path>
					</g>
				</g>
			</g>
		);
	}
}

export default Beads;
