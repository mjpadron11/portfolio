import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react';

const StyledList = styled.ul`
    display: flex;
    justify-content: center;
    justify-items: center;
    gap: 4.5rem;
    list-style: none;
    padding: 2rem;
`

const StyledLinks = styled.a`
    text-decoration:none;
    color: white;
    margin-left: 0.5rem;

`
const StyledIcon = styled.li`
    display: flex;
    align-items: center;
    z-index: 30;
`


const Navbar = ({ showIcon }) => {

    console.log(showIcon);

    const listItems = [
        {
            name:"Home",
            goTo: "home",
            iconName: "mdi:house-outline"
        },
        {
            name:"About me",
            goTo: "#About",
            iconName: "material-symbols:person-outline-sharp"
        },
        {
            name:"Work",
            goTo: "",
            iconName:"mdi:briefcase"
        },
        {
            name:"Contact",
            goTo: "",
            iconName: "mingcute:phone-fill"
        },
    ]

    return(
        <StyledList>
            {listItems.map(({ name, goTo, iconName }) => (
                <StyledIcon key={name}>
                    {showIcon && <Icon icon={iconName} height={"19px"} width= {"19px"}/>}
                    <StyledLinks href={goTo}>{name}</StyledLinks>
                </StyledIcon>
            ))}
        </StyledList>
    )
}

export default Navbar