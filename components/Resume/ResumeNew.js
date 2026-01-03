"use client";

import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

const resumeLink = () => {
  return (
    <div
      style={{ maxWidth: "auto", height: "100vh", position: "relative" }}
      className="d-flex justify-content-center"
    >
      <Image
        src="/Assets/ur.jpg"
        alt="Resume"
        fill
        style={{ objectFit: "contain" }}
        priority
        sizes="100vw"
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
