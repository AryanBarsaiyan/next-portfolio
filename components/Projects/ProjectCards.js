'use client'

import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Image from "next/image"
import { CgWebsite } from "react-icons/cg"
import { BsGithub } from "react-icons/bs"

export default function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div style={{ padding: "20px", position: "relative", height: "200px" }}>
        <Image
          src={props.imgPath}
          alt="card-img"
          fill
          style={{ objectFit: "contain", borderRadius: "10px", opacity: 0.8 }}
        />
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  )
}

