import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import landing from '../../Assets/landing.png'


function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={landing}
                isBlog={false}
                title="Carpooling System"
                description="The Main Objective of this Project is to reduce the traffic congestion and Added new Features like Emergency SOS . ReactJS and PHP will using for developing the web application."
                ghLink="https://github.com/raghulvj01/Gocar-Carpooling-System"
              />
            </Col>

            
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist