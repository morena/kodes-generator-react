import React from 'react';

class Container extends React.Component {
	render(className, ...props) {
		return <Container className={`container col ${className ? className : ''}`} {...props} />;
	}
}

export default Container;