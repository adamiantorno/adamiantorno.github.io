// Software Developed by Adam Iantorno for Portfolio Website 2024

import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import aboutAll from "./assets/aboutAll.png";
import aboutSelf from "./assets/aboutSelf.jpg";

import "./about.scss";


export default function About() {
    const skillsetDesign = [
        'Solidworks',
        'AutoCAD',
        'Adobe Creative Suite',
        'MATLAB',
    ];
    const skillsetProg = ['Python', 'Javascript', 'ROS (1 & 2)', 'C++'];
    const skillsetOther = ['Git', 'Rest APIs', 'Arduino', 'Linux (Shell)'];

    const ElectransLink = (
        <a
            href="https://electranstech.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-link"
        >
            Electrans Technologies Ltd.
        </a>
    );

    return (
        <section className="section-page" id="about">
            <Container>
                <Row>
                    <Col>
                        <h2 className="section-title-white">About Me</h2>
                    </Col>
                </Row>
                <Row className="bubble justify-content-sm-center">
                    <Row>
                        <Col className="about-text">
                            <p>
                                Hi! My name is Adam.
                                <span>&#128075;</span>
                            </p>
                            <p>
                                I'm a recently graduated mechanical engineering student from
                                University of Waterloo, Canada. I am a self-taught programmer with
                                a passion for learning and expanding my skillset. My goal is to
                                build sustainable and applicable products that push the limits of
                                technology and design. At the moment I am most interested learning 
                                and building things in robotics, entrepreneurship, and automation.
                            </p>
                            <p>
                                I am currently working as a Software Engineer at a start-up
                                called {ElectransLink}, where we've built an auto-coupling solution
                                for the commerical vehicle industry.
                            </p>
                        </Col>
                        <Col>
                            <Image
                                className="about-pic-self"
                                rounded
                                src={aboutSelf}
                                alt="Adam Iantorno Waterloo Headshot"
                            />
                        </Col>
                    </Row>
                    <hr className="splitter" />
                    <Row className="about-tech">
                        <span>
                            Here are a few technologies I have experience working with:
                        </span>
                        <Col>
                            <h4>Design</h4>
                            <ul>
                                {skillsetDesign.map((item) => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                        </Col>
                        <Col>
                            <h4>Controls</h4>
                            <ul>
                                {skillsetProg.map((item) => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                        </Col>
                        <Col>
                            <h4>Software</h4>
                            <ul>
                                {skillsetOther.map((item) => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                    <hr className="splitter" />
                    <Row>
                        <Row>
                            <Col>
                                <h3 className="section-subtitle">Outside of Academia</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="about-pic-div">
                                <Image
                                    className="about-pic-fun"
                                    rounded
                                    src={aboutAll}
                                    alt="Fun picture"
                                />
                            </Col>
                            <Col className="about-text">
                                <p>
                                    Aside from school and work, I enjoy having fun with my close
                                    friends and family, reading, and learning about new things. 
                                    I am oftentimes reading a sci-fi or fantasy novel, but I make 
                                    sure to mix in a science or business book too. I am currently 
                                    reading{' '}<span className="italics">Never Split the Differece by Chris Voss</span>,
                                    which is a handbook of negotating principles from Chris
                                    Voss's career as both a hostage negotiator and businessman. 
                                </p>
                                <p>
                                    I tend to stay active with a variety of different activities 
                                    like rock-climbing or basketball, but right now am most invested
                                    with weight-lifting. 
                                
                                </p>
                                <p>
                                    I am consistently tinkering with this website and adding new
                                    features or updating it with what's new in my life, so keep an eye out!
                                </p>
                            </Col>
                        </Row>
                    </Row>
                </Row>

            </Container>
        </section>
    )


}