import React from 'react';
import PropTypes from 'prop-types';
import './btn.scss';

class Btn extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;

		this.additionalclass = `btn ${props.additionalclass ? props.additionalclass : ''}`;
		this.btnvalue = props.btnvalue;
		this.id = `btn-${Math.random()}`;
	}

	createMarkup() {
		return { __html: this.btnvalue };
	}

	render() {
		return <div>
			<label htmlFor={this.id} className="btn-label" dangerouslySetInnerHTML={this.createMarkup()}></label>
			<input type="button" className={this.additionalclass} {...this.props} id={this.id} value={this.btnvalue}></input>
		</div>;
	}
}


Btn.propTypes = {
	additionalclass: PropTypes.string,
	btnvalue: PropTypes.string,
};

export default Btn;
