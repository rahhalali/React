import  React from 'react'
import { NavLink } from 'react-router-dom'
import {NavbarSection ,Logo ,LogoTest ,ListItem ,UlList,Anchor} from "./style.js"
import "./style.css"
 
 const Navbar = () => {
     
  return (
    <NavbarSection> 
            <div className="container">
                <Logo>
                    <LogoTest>Ultra Profile</LogoTest>
                </Logo>
                <div className="Nav">
                <UlList>
                    <ListItem><NavLink exatct to="/" className="nav_link">Home</NavLink></ListItem>
                    <ListItem><Anchor href="#">Work</Anchor></ListItem>
                    <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
                    <ListItem><Anchor href="#">Resume</Anchor></ListItem>
                    <ListItem><Anchor href="#">About</Anchor></ListItem>
                    <ListItem><NavLink to="/contact" className="nav_link" >Contact</NavLink></ListItem>
                </UlList>
                </div>
            </div>
            
        </NavbarSection>
  );
}


export default Navbar;