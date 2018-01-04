import React from 'react'
import styled from 'styled-components'
import BtnLink from './styled-components/BtnLink'

const HomeBg = styled.div`
    // background: url(../../assets/images/background.jpg) no-repeat center center;
    // background-attachment: scroll;
    // background-size: cover;
    text-align: center;
    color: #fff;'
`;

const IntroText = styled.div`
    //padding-top: 300px;
    //padding-bottom: 200px;
`;

const IntroLeadIn = styled.div`
    font-family: "Droid Serif","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-style: italic;
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 25px;
`;

const IntroHeading = styled.div`
    font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 75px;
    line-height: 75px;
    //margin-bottom: 50px;
`;

const Home = () => (
    <div>
        <HomeBg>
            <div className="intro-text">
                <IntroText>
                    <IntroLeadIn>Welcome To Kodes Necklace Generator!</IntroLeadIn>
                </IntroText>
                <IntroHeading>Order a custom necklace here</IntroHeading>
                <BtnLink className="page-scroll btn btn-xl" href="/design">Order</BtnLink></div>
        </HomeBg>
    </div>
)

export default Home
