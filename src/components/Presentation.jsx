import React from 'react';
import styled from 'styled-components';
import Wrapper from '../lib/Wrapper';
import ImageButtons from '/home/mary/code/React/portfolio/public/assets/ImageButton.png'
import ImageHeader from '/home/mary/code/React/portfolio/public/assets/ImageHeader.png'

const StyledPresentationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6rem 0 35rem;
    position: relative;
    gap: 4rem;
    width:100%;
`
const StyledNameContainer = styled.div`
    width: 600px;
`

const StyledNameWrapper = styled.div`
    text-align:left;
    max-width: 100%;
`

const StyledPresentation = styled.h1`
    font-family: Poppins;
    font-weight: 700;
    display:flex;
    text-align: left;
`

const StyledHeaderFigure = styled.figure`
    height: 245px;
    overflow-y: hidden;
    position: absolute;
    left: 8%;
    top: -5%;
    `
const StyledHeaderImage = styled.img`
    z-index: 30;
    height: 100%;
    `

const StyledButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    z-index: 10;
    /* position: relative; */
    gap: 1rem;

`
const StyledButtonsContact = styled.button`
    padding: 10px;
    width: 200px;
    height: 50px;
    border-radius: 30px;
    background-color: #FFFA ;
    color: white;

    &:hover {
		cursor: pointer;
    }
`

const StyledButtonsDownload = styled.button`
    padding: 10px;
    width: 200px;
    height: 50px;
    border-radius: 30px;
    background: linear-gradient(to right, #C961DE,#3645A0);
    color: white;

    &:hover {
		cursor: pointer;
    }
`

const StyledFigure = styled.figure`
    width:900px;
    overflow-x: hidden;
    position: absolute;
    right: 0%;
    top: 3%;
    margin: 0;
`

const StyledImage = styled.img`
    z-index: 10;
    /* position: absolute; */
    width:100%;
    height: 100%;
`

export default function Presentation() {
    return (
        <Wrapper>
            <StyledPresentationContainer>
                <StyledHeaderFigure>
                    <StyledHeaderImage src={ImageHeader} alt="Planetas y lunas" />
                </StyledHeaderFigure>
                <StyledNameWrapper>
                    <StyledNameContainer>
                        <StyledPresentation>Mariem Padron, frontend developer based in Bogota, Colombia</StyledPresentation>
                    </StyledNameContainer>
                </StyledNameWrapper>
                <StyledButtonsWrapper>
                    <StyledButtonsContact>Contact me</StyledButtonsContact>
                    <StyledButtonsDownload>Download CV</StyledButtonsDownload>
                </StyledButtonsWrapper>
                <StyledFigure>
                    <StyledImage src={ImageButtons} alt="planetas y anillos" />
                </StyledFigure>
            </StyledPresentationContainer>
        </Wrapper>
    )
}