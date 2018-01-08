import styled from 'styled-components'
import React from 'react'

import BtnStyles from './BtnStyles'

const Btn = styled.button`
    ${ BtnStyles }
`;

export default ({ className, ...props }) => <Btn className={`btn ${className}`} {...props}/>
