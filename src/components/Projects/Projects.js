import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

const projects = [
  {
    imgPaths: [
      "/Assets/Projects/gatoes-user-1.webp",
      "/Assets/Projects/gatoes-user-2.webp",
      "/Assets/Projects/gatoes-user-3.webp",
      "/Assets/Projects/gatoes-user-4.webp"
    ],
    fullWidth: true,
    title: "Gatoes - Food & Grocery Delivery App",
    description:
      "Production React Native app serving 500+ daily active users. Led end-to-end development from scratch as Mobile Team Lead, managing 3 interns. Features real-time order tracking with socket.io, Razorpay payment gateway integration, GPS location tracking, push notifications, and Zoho customer support. Implemented offline-first architecture with TanStack Query and achieved 80% reduction in API response times through strategic caching. Full lifecycle ownership: Figma designs → Development → Deployment → Maintenance. Available on both App Store and Play Store.",
    badges: ["Team Lead", "Production", "500+ DAU"],
    techStack: ["React Native", "Expo", "TypeScript", "Socket.io", "Razorpay", "TanStack Query", "GPS", "Push Notifications", "Node.js", "MongoDB"],
    androidLink: "https://play.google.com/store/apps/details?id=com.gatoes",
    iosLink: "https://apps.apple.com/in/app/gatoes-food-grocery-delivery/id1519726781",
  },
  {
    imgPaths: [
      "/Assets/Projects/gatoes-partner-1.webp",
      "/Assets/Projects/gatoes-partner-2.webp",
      "/Assets/Projects/gatoes-partner-3.webp",
      "/Assets/Projects/gatoes-partner-4.webp"
    ],
    fullWidth: true,
    title: "Gatoes Partner - Merchant Management App",
    description:
      "Companion React Native app for restaurant and store partners to manage their operations. Built comprehensive order management system, inventory tracking, and real-time notifications. Integrated RESTful APIs with offline-first architecture for seamless merchant experience. Deployed on both iOS and Android platforms with continuous updates based on merchant feedback.",
    badges: ["Production", "B2B"],
    techStack: ["React Native", "Expo", "TypeScript", "RESTful APIs", "Real-time Updates"],
    androidLink: "https://play.google.com/store/apps/details?id=com.gatoes.foodmerchant",
    iosLink: "https://apps.apple.com/in/app/gatoes-partner/id1521618883",
  },
  {
    placeholderClass: "placeholder-healthcare",
    title: "AI-Powered Healthcare Diagnostic Chatbot",
    description:
      "RAG-based diagnostic chatbot using LLM integration via OpenRouter API for a healthcare startup. Built with React and TypeScript, enabling users to interact with AI for illness diagnostics and doctor recommendations. Implemented vector search and context retrieval for accurate medical responses. Features intelligent conversation flow, medical data processing, and production deployment. Demonstrates expertise in AI/LLM API integration - directly relevant for building AI-powered features in mobile applications.",
    badges: ["AI-Powered", "Production", "Healthcare"],
    techStack: ["React", "TypeScript", "OpenRouter API", "RAG Architecture", "LLM Integration", "Vector Database"],
    demoLink: "https://www.theaiim.com/docassist",
  },
  {
    placeholderClass: "placeholder-splitwise",
    title: "Expense Tracker - Personal & Group Expenses",
    description:
      "React Native mobile app for expense tracking and bill splitting, similar to Splitwise. Features include personal expense management, group expense splitting with friends, real-time expense updates, and intuitive UI for managing shared costs. Built with TypeScript and Expo for cross-platform compatibility. Currently in active development, showcasing continuous learning and initiative in mobile development.",
    badges: ["In Development", "Mobile App"],
    techStack: ["React Native", "TypeScript", "Expo", "Firebase"],
    ghLink: "https://github.com/muazaqdas/Free-SplitWise",
  },
  {
    imgPath: "/Assets/Projects/careerfly.png",
    title: "Careerfly - EdTech Platform",
    description:
      "Led full-stack development as Senior Web Developer at HITGOC for an innovative Ed-Tech website. Built RESTful APIs with Node.js and designed MongoDB schemas for course and user data management. Created responsive student dashboard with React.js (v18), implemented React Hooks, and integrated Chart.js for data visualization. Optimized performance achieving 90+ Lighthouse scores and 40% reduction in load times through code splitting, lazy loading, and Webpack bundling.",
    techStack: ["React.js", "Node.js", "MongoDB", "RESTful APIs", "Chart.js", "Webpack"],
    demoLink: "https://careerfly.in/",
  },
  {
    imgPath: "/Assets/Projects/emara.png",
    title: "EMARA: Urbanism & Architecture Portfolio",
    description:
      "Developed dynamic portfolio website for architecture client using React.js with React Hooks. Integrated GraphQL API from GraphCMS using Axios for content management of 12+ architectural projects. Built 15 responsive pages with reusable React components, implemented React Router for navigation, and Context API for state management. Created interactive UI components including image carousels, lightboxes, and dynamic content rendering. Styled with Tailwind CSS following modern UI/UX best practices, improving user engagement by 25%.",
    techStack: ["React.js", "GraphQL", "GraphCMS", "Axios", "Tailwind CSS", "React Router"],
    demoLink: "https://emara.vercel.app/",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((item, index) => {
            const colSize = item.fullWidth ? 12 : 6;
            return (
              <Col md={colSize} className="project-card" key={index}>
                <ProjectCard
                  imgPath={item?.imgPath}
                  imgPaths={item?.imgPaths}
                  fullWidth={item?.fullWidth}
                  placeholderClass={item?.placeholderClass}
                  title={item.title}
                  description={item.description}
                  badges={item?.badges}
                  techStack={item?.techStack}
                  ghLink={item?.ghLink}
                  demoLink={item?.demoLink}
                  iosLink={item?.iosLink}
                  androidLink={item?.androidLink}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
