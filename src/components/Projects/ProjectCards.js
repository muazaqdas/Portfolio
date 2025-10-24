import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaApple, FaGooglePlay } from "react-icons/fa";

function ProjectCards(props) {
  // Function to render badge based on type
  const renderBadge = (badge) => {
    const badgeClass = badge.toLowerCase().replace(/\+/g, '').replace(/\s+/g, '-');
    return (
      <span key={badge} className={`project-badge badge-${badgeClass}`}>
        {badge}
      </span>
    );
  };

  // Check if multiple images provided
  const hasMultipleImages = props.imgPaths && props.imgPaths.length > 0;

  return (
    <Card className={`project-card-view ${props.fullWidth ? 'project-full-width' : ''}`}>
      {/* Image Section - Handle multiple images, single image, or placeholder */}
      {hasMultipleImages ? (
        // Display 2x2 grid of images for Gatoes apps
        <div className="project-image-grid">
          {props.imgPaths.map((imgPath, idx) => (
            <img
              key={idx}
              src={imgPath}
              alt={`${props.title} screenshot ${idx + 1}`}
              className="grid-image"
            />
          ))}
        </div>
      ) : props.imgPath ? (
        // Display single image for regular projects
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      ) : (
        // Placeholder for projects without images
        <div className={`project-placeholder ${props.placeholderClass || ''}`}>
          <span>{props.title}</span>
        </div>
      )}

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        {/* Badges Section */}
        {props.badges && props.badges.length > 0 && (
          <div style={{ marginBottom: "10px" }}>
            {props.badges.map((badge) => renderBadge(badge))}
          </div>
        )}

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Tech Stack Display */}
        {props.techStack && props.techStack.length > 0 && (
          <div style={{ marginTop: "15px", marginBottom: "15px" }}>
            <p style={{ fontSize: "0.9em", color: "rgba(255, 255, 255, 0.7)", marginBottom: "8px" }}>
              <strong>Tech Stack:</strong>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {props.techStack.map((tech, index) => (
                <span
                  key={index}
                  style={{
                    fontSize: "0.75em",
                    padding: "3px 8px",
                    backgroundColor: "rgba(200, 137, 230, 0.2)",
                    border: "1px solid rgba(200, 137, 230, 0.4)",
                    borderRadius: "4px",
                    color: "#c770f0"
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Buttons Section */}
        <div style={{ marginTop: "15px" }}>
          {/* GitHub Link */}
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;GitHub
            </Button>
          )}

          {/* iOS App Store Link */}
          {props.iosLink && (
            <Button
              variant="primary"
              href={props.iosLink}
              target="_blank"
              style={{ marginLeft: props.ghLink ? "10px" : "0" }}
            >
              <FaApple /> &nbsp;App Store
            </Button>
          )}

          {/* Android Play Store Link */}
          {props.androidLink && (
            <Button
              variant="primary"
              href={props.androidLink}
              target="_blank"
              style={{ marginLeft: (props.ghLink || props.iosLink) ? "10px" : "0", marginTop: (props.ghLink && props.iosLink) ? "10px" : "0" }}
            >
              <FaGooglePlay /> &nbsp;Play Store
            </Button>
          )}

          {/* Regular Demo Link (for web projects) */}
          {props.demoLink && !props.iosLink && !props.androidLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: props.ghLink ? "10px" : "0" }}
            >
              <CgWebsite /> &nbsp;Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
