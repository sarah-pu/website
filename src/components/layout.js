import React from "react"
import { Link } from "gatsby"
import fb from "../images/facebook.png"
import lin from "../images/linkedin.png"
import email from "../images/email2.png"
import git from "../images/git.png"


const Menu = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem`}}>
      <Link to={props.to}>{props.children}</Link>
    </li>
)


export default ({children}) => (
    <div classsName="wrapper">
        <nav className="navbar">
        <ul style={{float: `left` }}>
            <Menu to="/">Sarah Pu</Menu>
        </ul>
        <ul style={{ listStyle: `none`, float: 'right', marginRight: '10px'}}>
            <Menu to="#about">About</Menu>
            <Menu to="#projects">Projects</Menu>
            <Menu to="/contact/">Contact</Menu>
        </ul>
        </nav>
        {children}
        <footer className="footer">
            <a href="https://www.facebook.com/sarah.pu.73">
                <img src={fb} alt="Facebook Icon">
                </img>
            </a>
            <a href="https://github.com/sarah-pu">
                <img src={git} alt="Github Icon">
                </img>
            </a>
            <a href="mailto:sarahpu2009@gmail.com">
                <img src={email} alt="Email Icon">
                </img>
            </a>
            <a href="https://linkedin.com/in/sarah-pu-a98902178">
                <img src={lin} alt="LinkedIn Icon">
                </img>
            </a>
            <p style={{opacity: 0.5, fontSize: '12px'}}>&copy; 2020 Sarah Pu</p>
        </footer>
    </div>
)