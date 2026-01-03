"use client";

import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

const resumeLink = () => {
  return (
    <div
      style={{ maxWidth: "auto", height: "100vh" }}
      className="d-flex justify-content-center"
    >
      <img
        src="/Assets/ur.jpg"
        alt="Resume"
        style={{ width: "100%", height: "auto", objectFit: "contain" }}
      />
    </div>
  );
};

export default function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row className="resume">{resumeLink()}</Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="/Assets/ur.pdf"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}
