import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import res from "../images/Pu_Sarah_Resume.pdf"
import boids from "../images/boids.png"
import lightbulb from "../images/lightbulb.png"

export default () => (
    <Layout>
        <div id="about" className="about">
            <div className="about-content">
                <Header className="about-title" headerText="Hello!"/>
                <p>My name's Sarah. I'm a second year Computer Science student at the University of Waterloo.</p>
                <p></p>
                <a href={res} target="_blank" className="resume bouncy">Resume</a>
            </div>
        </div>
        <div id="projects" className="proj">
            <div className="proj-content">
                <Header className="proj-title" headerText="Projects" />
                <ul style={{display: 'flex'}}>
                    <li style={{width: '212px', marginRight: '30px'}}>
                        <a href="https://github.com/sarah-pu/Boids">
                            <img src={boids} alt="Boids"></img>
                            <p><strong>Boids Simulation</strong></p>
                            <p>Created using Greenfoot and Java to simulate the flocking behaviour of birds.</p>
                        </a>
                    </li>
                    <li style={{width: '212px', marginRight: '0px'}}>
                        <img style={{opacity: 0.3}} src={lightbulb} alt="Lightbulb"></img>
                        <p><strong>New Projects</strong></p>
                        <p>Coming soon!</p>
                    </li>
                </ul>
            </div>
        </div>
    </Layout>
)
