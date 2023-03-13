import React from 'react';
import styled from 'styled-components';
import Wrapper from '/home/mary/code/React/portfolio/src/lib/Wrapper.jsx'
import Recentworkbackground from '/home/mary/code/React/portfolio/public/assets/Recentworkbackground.png'
import Productcard from '/home/mary/code/React/portfolio/public/assets/first-web-page.png'
import Landingwepage1 from '/home/mary/code/React/portfolio/public/assets/Landingwebpage1.png'


const StyledSection = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
`

const StyledContainer = styled.div`
    z-index:100;
    display:flex;
	flex-direction:column;
	position: relative;
	justify-content: center;
	align-items: center;
    padding: 2rem 0 5rem;

    h2 {
        margin-bottom: 3rem;
    }
`

const StyledInfoWrapper = styled.div`
    width: 1200px;
	display:flex;
    flex-direction: row;
    justify-content: center;

    div:nth-child(2) {
        /* background-color: #BFF9D46A; */
        background-color: rgba(191, 249, 221, 0.4);
        transform: scale(1.1);
        backdrop-filter: blur(10px);
        position:relative;
        z-index: 100;

    }
`
const StyledInfoFigure2 = styled.figure`
    width: 260px;
    height: 180px;
    display: flex;
    align-items: center;
    margin: 0;
    border-radius: 30px;
`

const StyledWebPage = styled.img`
    width: 100%;
    margin:0;
`
const StyledInfo = styled.div`
    width: 380px;
    height: 280;
    display: flex;
    flex-direction:column;
    align-items: center;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));
    border-radius: 30px;
    overflow: hidden;

    &:nth-child(2) {
    }
`
const StyledSubtitle = styled.h3`
    display: flex;
    justify-content: center;
    background-color: #0006;
    width: 100%;
    padding: 1rem 0 1rem;
    border-radius: 0 0 30px 30px;
    margin: 0;

`

const StyledBackgroundContainer = styled.figure`
    z-index:10;
    position: absolute;
    left: 0;
    bottom:-27%;
	width:100%;
	margin: 0;
`
const StyledBackground = styled.img`
    width: 100%;
	height: 100%;
`

const Recentwork = () => {

    // const listItems = [
    //     {
    //         name:"UI desigs",
    //         goTo: "https://appleapplication.netlify.app/",
    //         image: {Landingwepage1}
    //     },
    //     {
    //         name:"Designs",
    //         goTo: "https://mjpadron11.github.io/card-perfume/",
    //         image: {Productcard}
    //     },
    //     {
    //         name:"UI designs2",
    //         goTo: "https://appleapplication.netlify.app/",
    //         image: {Productcard}
    //     }
    // ]

    return (
        <Wrapper>
            <StyledSection>
                <StyledContainer id='About'>
                    {/* {StyledInfoWrapper.map (({name, goTo, image}) => (
                        <StyledInfo>
                            <StyledInfoFigure2>

                            </StyledInfoFigure2>
                        </StyledInfo>
                        ))
                    }

                    ) */}
                    <h2>My recent work</h2>
                    <StyledInfoWrapper>
                        <StyledInfo>
                            <StyledInfoFigure2>
                                <a href='https://appleapplication.netlify.app/'>
                                    <StyledWebPage src={Landingwepage1} alt="" />
                                </a>
                            </StyledInfoFigure2>
                            <StyledSubtitle> UI designs</StyledSubtitle>
                        </StyledInfo>
                        <StyledInfo>
                            <StyledInfoFigure2>
                                <a href='https://mjpadron11.github.io/card-perfume/'>
                                    <StyledWebPage src={Productcard} alt="Primera tarjeta" />
                                </a>
                            </StyledInfoFigure2>
                            <StyledSubtitle>Designs</StyledSubtitle>
                        </StyledInfo>
                        <StyledInfo>
                            <StyledInfoFigure2>
                                <a href='https://appleapplication.netlify.app/'>
                                    <StyledWebPage src={Landingwepage1} alt="" />
                                </a>
                            </StyledInfoFigure2>
                            <StyledSubtitle> UI designs</StyledSubtitle>
                        </StyledInfo>
                    </StyledInfoWrapper>
                </StyledContainer>
                <StyledBackgroundContainer>
                    <StyledBackground src={Recentworkbackground} alt="Imagen de fondo" />
                </StyledBackgroundContainer>
            </StyledSection>
        </Wrapper>
    )
}

export default Recentwork;