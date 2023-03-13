import React from 'react';
import styled from 'styled-components'
import AboutImage from '/public/assets/AboutBackground.png'
import Wrapper from '/src/lib/Wrapper.jsx';

const StyledContainer= styled.div`
	display:flex;
	flex-direction:column;
	/* width:300px; */
	justify-content: center;
	align-items: center;
	padding-top: 4rem;
`

const StyledTextWrapper = styled.div`
	z-index:30;
	display:flex;
	position: absolute;
	flex-direction: column;
	padding-left: 10rem;
	width: 300px;
	/* background-color: red; */
`
const StyledTitle = styled.h2`
	font-family: Poppins;
	font-size: 20px;
	display: flex;
`
const StyledInfo = styled.p`
	font-family: Poppins;
	font-weight:400;
	color: #FFFFFF;
`

const ImageWrapper = styled.figure`
	z-index:20;
	width:100%;
	margin: 0;
`

const StyledAboutImage = styled.img`
	width: 100%;
	height: 100%;
`

const About = () => {
	return (
		<Wrapper>
			<StyledContainer >
				<ImageWrapper>
					<StyledAboutImage src= {AboutImage} alt= 'figura de pie' id='About'/>
				</ImageWrapper>
				<StyledTextWrapper>
					<StyledTitle>About me</StyledTitle>
					<StyledInfo> A lifelong computer enthusiast and I would like to be allowed to work with a prestigios company. I am an excelent fit for a company given my passion and skills <b> Read more...</b></StyledInfo>
				</StyledTextWrapper>
			</StyledContainer>
		</Wrapper>
	)
}

export default About;