import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>I am a student currently studying Information Technology at CIET. I am passionate about technology and its potential to improve our lives. My goal is to use my knowledge to create meaningful solutions and make a positive impact on the world. I am an eager learner with a strong work ethic and an open mind. I am excited to learn more and develop my skills to be able to contribute to the tech community.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>GCP</li>
                                    <li>Linux</li>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>Java</li>
                                    <li>Python</li>
                                </Col>
                                <Col md={5}>
                                    <li>React Js</li>
                                    <li>C-programming</li>
                                    <li>Leadership</li> 
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage
