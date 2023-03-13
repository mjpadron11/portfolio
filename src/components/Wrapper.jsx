import React from 'react';
import styled from 'styled-components';


const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: none;
    width: 100%;
`

const Wrapper = ({ children }) => {
    return (
        <StyledWrapper>
            {children}
        </StyledWrapper>
    )
}

export default Wrapper;