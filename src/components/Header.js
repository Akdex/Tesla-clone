import React, { useState } from 'react'
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
// import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
    return (
        <Contaianer>
        <a>
            <img src="images/logo.svg" alt="Tesla-logo" />
        </a>

        <Menu>
         <a href="/">Model S</a>
         <a href="/">Model 3</a>
         <a href="/">Model X</a>
         <a href="/">Model Y</a>
         <a href="/">Solar Roof</a>
         <a href="/">Solar Panels</a>
        </Menu>

        <RightMenu>
          <a href="/">Shop</a>
          <a href="/">Tesla Account</a>

          <CustomMenu onClick={() => setBurgerStatus(true)} />

        </RightMenu>

        <BurgerNav show = {burgerStatus}>
          <CloseWrapper>

            <CustomClose onClick={() => setBurgerStatus(false)} />

          </CloseWrapper>
         <li><a href="/">Model S</a></li>
         <li><a href="/">Model 3</a></li>
         <li><a href="/">Model X</a></li>
         <li><a href="/">Model Y</a></li>
         <li><a href="/">Solar Roof</a></li>
         <li><a href="/">Solar Panels</a></li>
         <li><a href="/">Existing Inventory</a></li>
         <li><a href="/">Used Inventory</a></li>
         <li><a href="/">Trade-In</a></li>
         <li><a href="/">Test Drive</a></li>
         <li><a href="/">Powerwall</a></li>
         <li><a href="/">Commercial Energy</a></li>
         <li><a href="/">Utilities</a></li>
         <li><a href="/">Charging</a></li>
         <li><a href="/">Support</a></li>
         <li><a href="/">Shop</a></li>
         <li><a href="/">Account</a></li>
         <li><a href="/">More    </a></li>
        </BurgerNav>


        </Contaianer>

        
    )
}

export default Header;



const Contaianer = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

a{
    font-weight: 600;
    padding: 0 17px;
    flex-wrap: nowrap;
}

@media (max-width: 1200px) {
    display: none;
  }

`

const RightMenu = styled.div`

display: flex;
align-items: center;
  a {
     font-weight: 600;
     padding: 0 15px;
     flex-wrap: nowrap;
    } 
`

const CustomMenu = styled(MenuIcon)`
cursor: pointer;
`
const BurgerNav = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background-color: #fff;
list-style-type: none;
width: 290px;
padding: 20px;
display: flex;
flex-direction: column;
z-index: 16;

transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition: transform 0.4s ease-in-out;

li{
  padding: 15px 0px;

  a{
    font-weight: 600;
    cursor: pointer;
  }
}`

const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;

`
const CustomClose = styled(ClearIcon)`
cursor: pointer;
`

