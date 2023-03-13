import React from 'react';
import styled from 'styled-components';


const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: none;
`

const MainWrapper = ({ children }) => {
    return (
        <StyledWrapper>
            {children}
        </StyledWrapper>
    )
}

export default MainWrapper;