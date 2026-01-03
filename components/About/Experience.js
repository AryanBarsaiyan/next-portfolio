import { Container, Row, Col } from "react-bootstrap";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      title: "Senior Associate Software Engineer",
      company: "Recruit CRM",
      period: "November 2024 - Present",
      duration: "1 year 3 months",
      location: "Remote",
      achievements: [
        "Engineered a scalable AI-powered Interview Platform featuring real-time behavioral, coding, and follow-up rounds with dynamic scoring based on accuracy, efficiency, and communication metrics; automated 5,000+ candidate interviews for TSE 2025 hiring, reducing manual screening time by 90%+ and accelerating hiring decisions.",
        "Developed a secure JWT authentication system for API endpoints, managing user sessions and ensuring seamless access control.",
        "Integrated Stripe payments and billing system with custom subscription cycles and webhook-based real-time event handling (e.g., billing, upgrades, disputes), leading to 100% reliable payment processing without third-party dependencies.",
        "Designed and implemented an AI-powered website search from scratch using Amazon Bedrock, enabling customers to query seamlessly and increasing demo requests by 80%.",
        "Implemented advanced search functionality using Elasticsearch and automated a daily data ingestion pipeline with AWS Lambda, reducing manual updates to zero and improving search data freshness, leading to faster and more accurate query results.",
        "Created a CI/CD pipeline with Jenkins, Docker, and ECS for automated autoscaling deployments. Configured AWS Load Balancer with domain-based routing, ensuring 100% uptime through resilient DevOps and proactive monitoring.",
      ],
    },
    {
      title: "Associate Software Engineer",
      company: "Recruit CRM",
      period: "November 2023 - November 2024",
      duration: "1 year",
      location: "Remote",
      achievements: [],
    },
    {
      title: "Software Engineer Trainee",
      company: "Recruit CRM",
      period: "June 2024 - November 2024",
      duration: "6 months",
      location: "Remote",
      achievements: [
        "Developed a Node.js microservice to optimise CloudFront cache performance by automating global cache warm-up and enabling instant warming of custom URLs, reducing page load times by up to 40% and improving Core Web Vitals to meet Google performance thresholds; integrated with Slack for real-time notifications and insights.",
        "Developed a Web Vitals Monitoring Application to track Core Web Vitals of real-time website users, delivering data-driven insights that enabled targeted optimisations, improving page performance scores by 25% and enhancing overall user experience.",
        "Developed end-to-end automation for Marketing workflows — including personalised audience messaging, automated data gathering, and campaign analytics — increasing operational efficiency by 200% and removing all manual processes.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Recruit CRM",
      period: "February 2024 - June 2024",
      duration: "5 months",
      location: "Remote",
      achievements: [],
    },
    {
      title: "Software Engineer Intern",
      company: "Precise Leads",
      period: "June 2023 - December 2023",
      duration: "7 months",
      location: "Remote",
      achievements: [
        "Built a waterfall-model data enrichment pipeline with automated validation, increasing valid contact coverage for cold outreach by 60%+ and improving domain quality to boost email deliverability.",
        "Developed a fully automated web scraping and outreach system using Pinecone, Apollo.io, and GPT, achieving 100% automation of lead targeting and responses, boosting conversion rates.",
      ],
    },
    {
      title: "Intern",
      company: "iMocha",
      period: "August 2022 - April 2023",
      duration: "9 months",
      location: "Remote",
      achievements: [
        "Created problems based on topics such as Tree, Graph, Dynamic Programming, Sorting, Searching, etc.",
        "Created problems based on Java, Python, and full stack technologies.",
        "Collaborated with the team of developers to refine and improve existing problem sets based on feedback and analysis.",
      ],
    },
  ];

  return (
    <Container
      style={{ paddingTop: "80px", paddingBottom: "50px", textAlign: "left" }}
    >
      <h1
        className="project-heading"
        style={{ paddingBottom: "40px", textAlign: "left" }}
      >
        Work <strong className="purple">Experience</strong>
      </h1>
      <Row style={{ justifyContent: "flex-start" }}>
        <Col lg={12} style={{ textAlign: "left" }}>
          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.title}-${index}`}
              className="experience-card"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                padding: "30px",
                borderRadius: "12px",
                border: "1.5px solid rgba(183, 216, 105, 0.4)",
                marginBottom: "25px",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: exp.achievements.length > 0 ? "20px" : "0",
                }}
              >
                <div
                  style={{
                    background: "rgba(183, 216, 105, 0.15)",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "20px",
                    flexShrink: 0,
                  }}
                >
                  <FaBriefcase
                    style={{ color: "#b7d869", fontSize: "1.3em" }}
                  />
                </div>
                <div style={{ flex: 1, textAlign: "left" }}>
                  <h3
                    style={{
                      color: "#b7d869",
                      margin: 0,
                      fontSize: "1.4em",
                      fontWeight: 600,
                      marginBottom: "8px",
                      lineHeight: "1.3",
                      textAlign: "left",
                    }}
                  >
                    {exp.title}
                  </h3>
                  <h4
                    style={{
                      color: "rgba(255, 255, 255, 0.9)",
                      margin: 0,
                      fontSize: "1.1em",
                      fontWeight: 500,
                      marginBottom: "10px",
                      textAlign: "left",
                    }}
                  >
                    {exp.company}
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "12px",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        color: "rgba(183, 216, 105, 0.9)",
                        fontSize: "0.95em",
                        fontWeight: 400,
                      }}
                    >
                      {exp.period}
                    </span>
                    <span
                      style={{
                        color: "rgba(255, 255, 255, 0.5)",
                        fontSize: "0.9em",
                      }}
                    >
                      •
                    </span>
                    <span
                      style={{
                        color: "rgba(183, 216, 105, 0.9)",
                        fontSize: "0.95em",
                        fontWeight: 400,
                      }}
                    >
                      {exp.duration}
                    </span>
                    <span
                      style={{
                        color: "rgba(255, 255, 255, 0.5)",
                        fontSize: "0.9em",
                      }}
                    >
                      •
                    </span>
                    <span
                      style={{
                        color: "rgba(183, 216, 105, 0.9)",
                        fontSize: "0.95em",
                        fontWeight: 400,
                      }}
                    >
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>
              {exp.achievements.length > 0 && (
                <div
                  style={{
                    marginLeft: "70px",
                    marginTop: "20px",
                    textAlign: "left",
                  }}
                >
                  <ul
                    style={{
                      color: "rgba(255, 255, 255, 0.9)",
                      paddingLeft: "20px",
                      margin: 0,
                      listStyle: "none",
                      textAlign: "left",
                    }}
                  >
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        style={{
                          marginBottom: "12px",
                          lineHeight: "1.7",
                          fontSize: "0.95em",
                          position: "relative",
                          paddingLeft: "25px",
                          textAlign: "left",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            top: "8px",
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            background: "#b7d869",
                            display: "block",
                          }}
                        />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
