import React from 'react';
import Svg from './Svg';
import ColoursList from './ColoursList';
import fonts from '../fonts';
import Grid from 'styled-grid';

import styled from 'styled-components';
import Btn from './styled-components/Btn';

import DesignModal from './DesignModal';

const SectionHeading = styled.h1`
    font-family: ${fonts.Montserrat};
    text-transform: uppercase;
    font-weight: 700;
    font-size: 36px;
    margin-top: 20px;
    margin-bottom: 10px;
    line-height: 1.1;
`;

const SectionSubheading = styled.h2`
    font-family: ${fonts.Montserrat};
    text-transform: uppercase;
    font-weight: 700;
    font-size: 30px;
    margin-top: 20px;
    margin-bottom: 10px;
    line-height: 1.1;
    color: inherit;
`;

const TextMuted = styled.p`
    margin: 0 0 10px;
    font-size: 14px;
    line-height: 1.75;
`;

const Section = styled.section`

`;

class Design extends React.Component{

	constructor(props) {
		super(props);

		this.state = {
			submitIsDisabled    : true,
			colourPicked        : null,
			modalIsOpen					: undefined,
		};

		// This binding is necessary to make `this` work in the callback
		this.isSubmitDisabled = this.isSubmitDisabled.bind(this);
		this.callBackFromColourList = this.callBackFromColourList.bind(this);
		this.callBackFromSvg = this.callBackFromSvg.bind(this);
		this.handleModal = this.handleModal.bind(this);
	}

	isSubmitDisabled(){
		return this.state.submitIsDisabled;
	}

	callBackFromColourList(dataFromColourList){
		//console.log("Design: "+dataFromColourList);
		console.log(dataFromColourList);
		this.setState({
			colourPicked: dataFromColourList,
			modalIsOpen: true,
		});
	}

	callBackFromSvg(dataFromSvg){

	}

	handleModal(){
		return this.state.modalIsOpen;
	}

	render(){
		return(
			<Section>
				<div className="row">
					<Grid lg={12/12} className="col12 text-center">
						<SectionHeading>Kodes necklaces generator</SectionHeading>
						<SectionSubheading>Customise your Kodes necklace</SectionSubheading>
						<TextMuted>
							<strong>Click on one or more beads then click on a colour. Move onto a new bead by clicking on it.</strong>
						</TextMuted>
					</Grid>
				</div>
				<div id="svgWrapper">
					<form id="necklaceOrderForm" action="/insert-details" method="post" className="form-horizontal">
						<div className="row">
							<Grid sm={6/12} md={6/12} lg={6/12} id="test" className="col6">
								<Svg colourPicked={this.state.colourPicked} />
							</Grid>
							<Grid sm={6/12} md={6/12} lg={6/12} className="col6">
								<div id="colours">
									<ColoursList callbackFromParent={this.callBackFromColourList} />
								</div>
								<div className="row">
									<Grid lg={12/12} className="col12 text-center buttons">
										<Btn id="downloadThisNecklace" className="btn-lg">Download necklace as image</Btn>
										<Btn id="orderThisNecklace" className="btn-lg">Order this necklace</Btn>
										<Btn id="confirmOrder" className="btn-lg" disabled={this.isSubmitDisabled()}>Order custom necklace</Btn>
										<DesignModal modalIsOpen={this.handleModal()}/>
									</Grid>
								</div>
							</Grid>
						</div>
					</form>
				</div>
			</Section>
		);
	}
}

export default Design;
