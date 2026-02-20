// Software Developed by Adam Iantorno for Portfolio Website 2024

import { React, useState } from 'react';
import { Container, Row, Col, ButtonGroup, Image } from "react-bootstrap";

import ExpData from './assets/expdata';
import "./experience.scss";


export default function Experience() {
    const [activeExpId, setActiveExpId] = useState(0);
    const experience = ExpData;

    return (
        <section className="section-page" id="experience">
            <Container>
                <Row>
                    <Col>
                        <h2 className="section-title-white">WORK EXPERIENCE</h2>
                    </Col>
                </Row>
                <Row className="bubble">
                    <Col md={3} className="exp-jobs">
                        <ButtonGroup className="exp-btn-group">
                            {experience.map((item) => (
                                <button // no bootstrap button avoid overwriting styles
                                    key={item.id}
                                    type="button"
                                    onClick={() => setActiveExpId(item.id)}
                                    className={
                                        activeExpId === item.id
                                            ? 'exp-button-active'
                                            : 'exp-button'
                                    }
                                >
                                    <h4>{item.company}</h4>
                                    <span>{item.period}</span>
                                </button>
                            ))}
                            <div className="exp-highlight-background" />
                            <div className={`exp-highlight exp-h-${activeExpId}`} />
                        </ButtonGroup>
                    </Col>
                    <Col md={9}>
                        {experience.map((item) => (
                            <Container
                                key={item.id}
                                className={
                                    activeExpId === item.id
                                        ? 'job-desc job-active'
                                        : 'job-desc job-inactive'
                                }
                                aria-hidden={activeExpId !== item.id}
                                hidden={activeExpId !== item.id}
                            >
                                <Row className="job-info">
                                    <Col className="job-title">
                                        <h3>{item.title}</h3>
                                        <h3>
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                className="inline-link"
                                            >
                                                @{item.company}
                                            </a>
                                        </h3>
                                        <span className="job-period">{item.period}</span>
                                    </Col>
                                    <Col>
                                        <Image
                                            className={`job-logo logo-${item.company}`}
                                            src={item.img}
                                            alt={`${item.company} company logo`}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <ul className="job-list">
                                            {item.desc.map((description) => (
                                                <li>{description}</li>
                                            ))}
                                        </ul>
                                    </Col>
                                </Row>
                                <Row className='job-tags'>
                                    <ul>
                                        {item.techonologies.map((tech) => (
                                            <li>{tech}</li>
                                        ))}   
                                    </ul>   
                                </Row>
                            </Container>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    );
}


