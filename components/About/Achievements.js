import { Container, Row, Col } from "react-bootstrap"
import { FaTrophy, FaMedal, FaCode } from "react-icons/fa"
import { SiCodechef } from "react-icons/si"

export default function Achievements() {
  const achievements = [
    {
      title: "Leetcode Max Rating",
      value: "2,228",
      badge: "Guardian",
      link: "https://leetcode.com/u/AryanBarsaiyan/",
      icon: <FaCode style={{ fontSize: "2em" }} />
    },
    {
      title: "CodeForces Max Rating",
      value: "1,610",
      badge: "Expert",
      link: "https://codeforces.com/profile/AryanBarsaiyan",
      icon: <FaCode style={{ fontSize: "2em" }} />
    },
    {
      title: "CodeChef Max Rating",
      value: "1,969",
      badge: "4-star",
      link: "https://www.codechef.com/users/aryanbarsaiyan",
      icon: <SiCodechef style={{ fontSize: "2em" }} />
    },
    {
      title: "GeeksForGeeks Job-a-thon 11",
      value: "Score 175/175",
      badge: "Rank 29 out of 10,284",
      link: "#",
      icon: <FaTrophy style={{ fontSize: "2em" }} />
    },
    {
      title: "TCS CodeVita Season XI",
      value: "Global Rank",
      badge: "51",
      link: "#",
      icon: <FaTrophy style={{ fontSize: "2em" }} />
    },
    {
      title: "CodeChef Starters 95",
      value: "Rank 62",
      badge: "Division 2 (Rated)",
      link: "#",
      icon: <FaMedal style={{ fontSize: "2em" }} />
    }
  ]

  return (
    <Container style={{ paddingTop: "50px", paddingBottom: "50px" }}>
      <h1 className="project-heading">
        <strong className="purple">Achievements</strong>
      </h1>
      <Row style={{ justifyContent: "center" }}>
        {achievements.map((achievement, index) => (
          <Col xs={12} md={6} lg={4} key={index} style={{ marginBottom: "25px" }}>
            <a
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                className="achievement-card"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  padding: "25px",
                  borderRadius: "10px",
                  border: "1px solid rgba(183, 216, 105, 0.3)",
                  textAlign: "center",
                  height: "100%",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
              >
                <div style={{ color: "#b7d869", marginBottom: "15px" }}>
                  {achievement.icon}
                </div>
                <h4 style={{ color: "#b7d869", marginBottom: "10px", fontSize: "1.2em" }}>
                  {achievement.title}
                </h4>
                <h3 style={{ color: "white", marginBottom: "10px", fontSize: "1.5em" }}>
                  {achievement.value}
                </h3>
                <p style={{ color: "#b7d869", margin: 0, fontSize: "0.9em" }}>
                  {achievement.badge}
                </p>
              </div>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

