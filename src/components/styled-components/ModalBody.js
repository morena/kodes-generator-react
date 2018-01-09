import React from 'react'
import styled from 'styled-components'

const ModalBody = styled.div`
    position: relative;
    padding: 15px;
`;

export default ( { className, ...props } ) => <ModalBody className={ `modal-body ${className? className:''}` } {...props}  />
