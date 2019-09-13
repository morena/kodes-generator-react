import React from 'react';
import Modal from 'react-modal';
import Grid from 'styled-grid';
import ModalHeader from './styled-components/ModalHeader';
import ModalBody from './styled-components/ModalBody';
import ModalFooter from './styled-components/ModalFooter';
import Btn from './btn/Btn';
import PropTypes from 'prop-types';

const customStyles = {
	overlay: {
		background            : 'rgba(0, 0, 0, 0.75)',
	},
	content : {
		top                   : '50%',
		left                  : '50%',
		right                 : 'auto',
		bottom                : 'auto',
		marginRight           : '-50%',
		transform             : 'translate(-50%, -50%)',
		padding               : '0',
	},
};

class DesignModal extends React.Component{

	constructor(){
		super();

		this.state = {
			modalIsOpen: undefined,
		};

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
		this.setState({modalIsOpen: true});
	}

	closeModal() {
		this.setState({modalIsOpen: false});
	}

	UNSAFE_componentWillReceiveProps(props){
		console.log(props);
		this.setState({
			modalIsOpen: props.modalIsOpen,
		});
	}

	render(){
		return(
			<Modal
				isOpen ={this.state.modalIsOpen}
				onRequestClose={this.closeModal}
				contentLabel="Example Modal"
				style={customStyles}
				ariaHideApp={false} //workaround as I couldn't set the element to be hidden
			>
				<ModalHeader>
					<Btn data-dismiss="modal" aria-label="Close" className="close" onClick={this.closeModal}><span aria-hidden="true">×</span></Btn>
					<h4 className="modal-title">Choose what part of the bead to paint</h4>
				</ModalHeader>
				<ModalBody>
					<div className="row">
						<div className="form-group">
							<Grid sm={4/12} className="col-sm-4">
								<label htmlFor="half" className="col-sm-4 control-label">Half</label>
							</Grid>
							<Grid sm={2/12} className="col-sm-2">
								<input type="radio" id="half" name="beadPart" value="half" className="form-control beadPartInput"/>
							</Grid>
						</div>
					</div>
					<div className="row">
						<div className="form-group">
							<Grid sm={4/12} className="col-sm-4">
								<label htmlFor="full" className="col-sm-4 control-label">Full Bead</label>
							</Grid>
							<Grid sm={2/12} className="col-sm-2">
								<input type="radio" id="full" name="beadPart" value="full" className="form-control beadPartInput"/>
							</Grid>
						</div>
					</div>
				</ModalBody>
				<ModalFooter>
					<Btn data-dismiss="modal" id="cancelModal" onClick={this.closeModal}>Cancel</Btn>
					<Btn data-dismiss="modal" id="saveModal" className="btn-primary">Save changes</Btn>
				</ModalFooter>
			</Modal>
		);
	}
}

DesignModal.propTypes = {
	modalIsOpen: PropTypes.bool,
};

export default DesignModal;
