'use client'

import Card from "react-bootstrap/Card"
import { ImPointRight } from "react-icons/im"

export default function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <div style={{ textAlign: "justify" }}>
            <p>
              Hi Everyone, I am <span className="purple"> Aryan Barsaiyan </span>
              from <span className="purple"> Auraiya(U.P.), India.</span>
              <br/>I am a <span className="purple">Senior Associate Software Engineer</span> at RecruitCRM with 2+ years of experience in full-stack development.
              <br/>
              <br />I completed my <span className="purple">B.Tech in Computer Science and Engineering</span> from Madan Mohan Malaviya University of Technology, Gorakhpur (CGPA: 8.39/10) from December 2020 to June 2024.
            </p>
            <p>
              I am also a <span className="purple">Competitive Programmer</span> with achievements like:
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Leetcode Max Rating: 2,228 (Guardian)
              </li>
              <li className="about-activity">
                <ImPointRight /> CodeForces Max Rating: 1,610 (Expert)
              </li>
              <li className="about-activity">
                <ImPointRight /> CodeChef Max Rating: 1,969 (4-star)
              </li>
            </ul>
            <p>
              Apart from coding, some other activities that I love to do!
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Competitive Programming
              </li>
              <li className="about-activity">
                <ImPointRight /> Building Scalable Web Applications
              </li>
              <li className="about-activity">
                <ImPointRight /> Exploring Cloud Technologies
              </li>
            </ul>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

