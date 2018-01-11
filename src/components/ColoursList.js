import React from 'react';
import PropTypes from 'prop-types';
import Colours from '../data/colours.json';
import styled from 'styled-components';
import BtnStyles from './styled-components/BtnStyles';
//
// var style1 = {
//     background: '#ffffff'
// }
// var style2 = {
//     background: '#ffec91'
// }

let coloursArray = Colours.colours;

const Btn = styled.button`
    ${ BtnStyles }
    margin-bottom: 5px;
    padding: 23px 27px;
`;

class ColoursList extends React.Component{

	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(colourHexValue){
		this.props.callbackFromParent(colourHexValue);
	}

	render(){
		const colourList = coloursArray.map((colour) =>
			<li key={colour.name}>
				<Btn className="btn-lg" type="button"
					style={{ background: colour.value }} id="0"
					data-colour={ colour.name }
					data-hex={ colour.value }
					onClick={(e) => this.handleClick(colour.value, e)}
				>
				</Btn>
			</li>
		);
		return (
			<ul className="list-unstyled list-inline">
				{colourList}
			</ul>
		);
	}


}


// - var n = 0
// for item in colours
//   li
//     button(type='button', class='btn btn-default btn-lg', style={background: item.value}, id=n, data-colour=item.name, data-hex=item.value)
//   - n++
// for( let i = 0; i < colours.length; i++ ){
//     <li>
//         <button className="btn btn-default btn-lg" type="button" style={ style1 } id="0" data-colour="white" data-hex="#ffffff">
//         </button>
//     </li>
// }

ColoursList.propTypes = {
	callbackFromParent: PropTypes.func,
};

export default ColoursList;
