// Software Developed by Adam Iantorno for Portfolio Website 2024

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";

import "./landing.scss";

export default function Landing() {

  const adjectives = ['Engineer', 'Innovator', 'Self-Starter']

  return (
    <section id='home'>
      <Container fluid className='home-bg'>
        <Container className='home-main'>
          <Row>
            <Col className='home-title'>
              <h1 className='name'>Adam</h1>
              <h1 className='name'>Iantorno</h1>
              <div>
              <Typewriter
                  options={{
                    strings: adjectives,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
