import React from 'react'
import styled from 'styled-components'

const ModalHeader = styled.div`
    padding: 15px;
    border-bottom: 1px solid #e5e5e5;
    .modal-title {
        margin: 0;
        line-height: 1.42857143;
    }
`;

export default ( { className, ...props } ) => <ModalHeader className={ `modal-header ${className? className:''}` } {...props}  />
