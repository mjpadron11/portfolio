import React from 'react';
import styled from 'styled-components'

const StyledTitle = styled.h2`
	font-family: Poppins;
	font-size: 20px;
`
const StyledInfo = styled.p`
	font-family: Poppins;
	font-weight:400;
	color: #FFFFFF;
`


const About = () => {
	return (
		<>
			<StyledTitle>About me</StyledTitle>
			<StyledInfo> A lifelong computer enthusiast and I would like to be allowed to work with a prestigios company. I am an excelent fit for a company given my passion and skills <b> Read more...</b></StyledInfo>
		</>
	)
}

export default About;