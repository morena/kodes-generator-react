import React from 'react';
import styled from 'styled-components';

const ModalFooter = styled.div`
    padding: 15px;
    text-align: right;
    border-top: 1px solid #e5e5e5;
`;

export default ( { className, ...props } ) => <ModalFooter className={ `modal-footer ${className? className:''}` } {...props}  />;
