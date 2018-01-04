import React from 'react'
import styled from 'styled-components'

const HomeBg = styled.div`
    // background: url(../../assets/images/background.jpg) no-repeat center center;
    // background-attachment: scroll;
    // background-size: cover;
    text-align: center;
    color: #fff;'
`;

const Home = () => (
    <div>
        <HomeBg>
            <h2>Home</h2>
        </HomeBg>
    </div>
)

export default Home
