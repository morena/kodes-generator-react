import styled from 'styled-components';
import React from 'react';
import './btn.scss'

import BtnStyles from './BtnStyles';

const Btn = styled.button`
    ${ BtnStyles }
`;

export default ({ className, ...props }) => <Btn type="button" className={`btn ${className? className:''}`} {...props}/>;
