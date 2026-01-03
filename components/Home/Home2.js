"use client";

import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a{" "}
              <span className="purple">Senior Associate Software Engineer</span>{" "}
              at RecruitCRM with 2+ years of experience building scalable web
              applications and AI-powered solutions.
              <br />
              <br />I am fluent in languages like
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, Java, C++, Python, Laravel, SpringBoot{" "}
                </b>
              </i>
              <br />
              <br />
              My expertise includes building &nbsp;
              <i>
                <b className="purple">Full-Stack Web Applications</b>,{" "}
                <b className="purple">AI-Powered Solutions</b>, and
                <b className="purple"> Cloud Infrastructure</b>.
              </i>
              <br />
              <br />I specialize in developing scalable systems using{" "}
              <b className="purple">Node.js</b>,{" "}
              <b className="purple">React.js</b>,{" "}
              <b className="purple">Next.js</b>,{" "}
              <b className="purple">Laravel</b>,{" "}
              <b className="purple">SpringBoot</b>, and cloud technologies like{" "}
              <b className="purple">AWS</b>, <b className="purple">Docker</b>,
              and <b className="purple">Elasticsearch</b>.
              <br />
              <br />
              I've engineered a scalable AI-powered Interview Platform that
              automated 5,000+ candidate interviews, reducing manual screening
              time by 90%+. I've also built secure authentication systems,
              payment integrations, and CI/CD pipelines ensuring 100% uptime.
              <br />
              <br />
              I'm also passionate about{" "}
              <b className="purple">Competitive Programming</b> and have
              achieved Guardian rank on Leetcode (2,228 rating), Expert on
              CodeForces (1,610 rating), and 4-star on CodeChef (1,969 rating).
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/Assets/avatar.svg"
                alt="avatar"
                width={300}
                height={300}
                className="img-fluid"
                priority
              />
            </motion.div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AryanBarsaiyan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Aryan24623"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aryanbarsaiyan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/aryan__barsaiyan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
