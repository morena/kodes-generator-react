import React from 'react';
import Svg from '../Svg';
import ColoursList from '../colours-list/ColoursList';
import './design.scss';
import Grid from 'styled-grid';
import Btn from '../btn/Btn';

import * from '../../actions/actions';
import { connect } from "react-redux";

import DesignModal from '../DesignModal';

class Design extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      submitIsDisabled: true,
      colourPicked: null,
      modalIsOpen: undefined
    };

    // This binding is necessary to make `this` work in the callback
    this.isSubmitDisabled = this.isSubmitDisabled.bind(this);
    this.callBackFromColourList = this.callBackFromColourList.bind(this);
    this.callBackFromSvg = this.callBackFromSvg.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  isSubmitDisabled() {
    return this.state.submitIsDisabled;
  }

  callBackFromColourList(dataFromColourList) {
    //console.log("Design: "+dataFromColourList);
    console.log(dataFromColourList);
    this.setState({
      colourPicked: dataFromColourList,
      modalIsOpen: true
    });
  }

  callBackFromSvg(dataFromSvg) {

  }

  handleModal() {
    return this.state.modalIsOpen;
  }

  render() {
    return (
      <section>
        <div className="row">
          <Grid lg={12 / 12} className="col12 text-center">
            <h1>Kodes necklaces generator</h1>
            <h2>Customise your Kodes necklace</h2>
            <p>
              <strong>Click on one or more beads then click on a colour. Move onto a new bead by clicking on it.</strong>
            </p>
          </Grid>
        </div>
        <div id="svgWrapper">
          <form id="necklaceOrderForm" action="/insert-details" method="post" className="form-horizontal">
            <div className="row">
              <Grid sm={6 / 12} md={6 / 12} lg={6 / 12} id="test" className="col6">
                <Svg colourPicked={this.state.colourPicked} />
              </Grid>
              <Grid sm={6 / 12} md={6 / 12} lg={6 / 12} className="col6">
                <div id="colours">
                  <ColoursList callbackFromParent={this.callBackFromColourList} />
                </div>
                <div className="row">
                  <Grid lg={12 / 12} className="col12 text-center buttons">
                    <Btn id="downloadThisNecklace" additionalclass="btn-lg" btnvalue="Download necklace as image"></Btn>
                    <Btn id="orderThisNecklace" additionalclass="btn-lg" btnvalue="Order this necklace"></Btn>
                    <Btn id="confirmOrder" additionalclass="btn-lg" disabled={this.isSubmitDisabled()} btnvalue="Order custom necklace"></Btn>
                    <DesignModal modalIsOpen={this.handleModal()} />
                  </Grid>
                </div>
              </Grid>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Design;
