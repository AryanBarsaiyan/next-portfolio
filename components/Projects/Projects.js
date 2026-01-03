import { Container, Row, Col } from "react-bootstrap"
import ProjectCard from "./ProjectCards"
import Particle from "../Particle"

export default function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://res.cloudinary.com/ddkj8wsjy/image/upload/v1684157735/Screenshot_253_ouiibl.png"}
              isBlog={false}
              title="MORTOBUY E-commerce Platform"
              description="Developed a full-featured E-commerce platform using the MERN stack (React.js, Node.js, Express.js, MongoDB) with Redux for state management. Created an admin application for efficient content management and integrated PayPal as a payment gateway supporting Card, UPI, and Net Banking. Features include shopping cart, user profiles, order management, and admin dashboard."
              ghLink="https://github.com/AryanBarsaiyan/MORTOBUY"
              demoLink="https://mortobuy.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://res.cloudinary.com/ddkj8wsjy/image/upload/v1684157966/Screenshot_261_wpfkdw.png"}
              isBlog={false}
              title="Treasure-Hunt"
              description="Developed and deployed a tested MERN treasure hunt app to assess soft skills, with a user-friendly UI and seamless networking. Implemented real-time progress tracking on parameters like time and accuracy, providing valuable feedback to users. The app features interactive clues in various formats (text, videos, 3D animations, games) to test specific soft skills."
              ghLink="https://github.com/AryanBarsaiyan/TreasureHunt"
              demoLink="https://treasurehunt-npui.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://res.cloudinary.com/ddkj8wsjy/image/upload/v1684158302/Screenshot_262_bduhvb.png"}
              isBlog={false}
              title="Portfolio Website"
              description="A modern, responsive portfolio website built with Next.js, React, and Bootstrap. Features include smooth animations, optimized performance, and a clean UI showcasing projects, skills, and achievements. The site is fully responsive and optimized for SEO."
              ghLink="https://github.com/AryanBarsaiyan/Resume-Project"
              demoLink="https://aryanbarsaiyan.github.io/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

