import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import Wrapper from '/home/mary/code/React/portfolio/src/lib/Wrapper.jsx'
import Navbar from './Navbar';
import ImageFooter from '/home/mary/code/React/portfolio/public/assets/ImageFooter.png';
import  PlanetFooter from '/home/mary/code/React/portfolio/public/assets/6.png';


const StyledWrapper = styled.div`
    background-color: #1C1C65;
    width: 100%;
    margin: 0;
    position: relative;
    margin-top: 10rem;

    div {
        text-align: right;
        border-top: 2px solid rgba(255, 255, 255, 0.15);
        width: 90%;
    }


    footer {
        margin: 2rem;
    }
`

const StyledPlanetFigure = styled.figure`
    position: absolute;
    top: -67%;
    margin: 0;
`

const StyledEllipseFigure = styled.figure`
    position: absolute;
    top: -146%;
    margin: 0;
    right: 1%;
    height: 810px;
`

const StyledEllipseImage = styled.img`
    height: 100%;
    width: 100%;
`

const StyledList = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    gap: 2.5rem;

    padding: 2rem;
`
const StyledIcon = styled.li`
    height: 40px;
    width: 40px;
    z-index: 30;
`
const icons = [
    {
        href:"https://www.google.com.co/webhp?tab=kw",
        iconName: "logos:google-icon"
    },
    {
        href:"https://www.linkedin.com/in/mariem-padron-82288a183/",
        iconName: "entypo-social:linkedin-with-circle",
        color:"#0A66C2"
    },
    {
        href:"https://wa.me/573125161742",
        iconName: "logos:whatsapp-icon"
    },
    {
        href:"https://github.com/mjpadron11",
        iconName: "codicon:github-inverted",
        color: "#FFFFFF"
    }
]

const Social = () => {



    return(
        <Wrapper>
            <StyledWrapper>
                <StyledPlanetFigure>
                    <img src={PlanetFooter} alt= "Planet"/>
                </StyledPlanetFigure>
                <StyledEllipseFigure>
                    <StyledEllipseImage src={ImageFooter} alt="Planet" />
                </StyledEllipseFigure>
                <Navbar showIcon/>
                <StyledList>
                    {icons.map(({ href, iconName,color }) => (
                        <StyledIcon key={href}>
                            <a href={href}>
                                <Icon icon={iconName} color={color} width={'40px'} height={'40px'}/>
                            </a>
                        </StyledIcon>
                    ))}
                </StyledList>
                <div>
                    <footer>Terms of Service - Privacy Policy</footer>
                </div>
            </StyledWrapper>
        </Wrapper>
    )
}


export default Social;