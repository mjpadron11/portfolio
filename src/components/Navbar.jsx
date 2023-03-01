import React from 'react';
import styled from 'styled-components';

const StyledLinks = styled.a`
    text-decoration:none;
`

const Navbar = () => {
    return(
        <>
            <StyledLinks href="">Home</StyledLinks>
            <StyledLinks href="">About me</StyledLinks>
            <StyledLinks href="">Work</StyledLinks>
            <StyledLinks href="">Contact</StyledLinks>
        </>
    )
}

export default Navbar;