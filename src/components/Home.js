import React from 'react';
import styled from 'styled-components';
import BtnLink from './styled-components/BtnLink';
import Container from './styled-components/Container';
import fonts from '../fonts';

const HomeBg = styled.div`
    background: url(../../assets/images/background.jpg) center center no-repeat;
    background-attachment: scroll;
    background-size: cover;
    text-align: center;
    color: #fff;'
`;

const IntroText = styled.div`
    padding-top: 300px;
    padding-bottom: 200px;
`;

const IntroLeadIn = styled.div`
    font-family: ${fonts.Droid};
    font-style: italic;
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 25px;
`;

const IntroHeading = styled.div`
    font-family: ${fonts.Montserrat};
    text-transform: uppercase;
    font-weight: 700;
    font-size: 75px;
    line-height: 75px;
    margin-bottom: 50px;
`;

class Home extends React.Component {
	render(){
		return(
			<HomeBg className="home-background">
				<Container>
					<IntroText className="intro-text">
						<IntroLeadIn className="intro-lead-in">Welcome To Kodes Necklace Generator!</IntroLeadIn>
					</IntroText>
					<IntroHeading className="intro-heading">Order a custom necklace here</IntroHeading>
					<BtnLink href="/design" className="btn-lg">Order</BtnLink>
				</Container>
			</HomeBg>
		);
	}
}
//
// const Home = () => (
//     <HomeBg className="home-background">
//         <Container>
//             <h1>${this.props.location.pathname}</h1>
//             <IntroText className="intro-text">
//                 <IntroLeadIn className="intro-lead-in">Welcome To Kodes Necklace Generator!</IntroLeadIn>
//             </IntroText>
//             <IntroHeading className="intro-heading">Order a custom necklace here</IntroHeading>
//             <BtnLink href="/design">Order</BtnLink>
//         </Container>
//     </HomeBg>
// )


export default Home;
