import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl , 
  projectUrl, 
 }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={projectUrl} target="_blank" rel="noreferrer">
      <div className="proj-imgbx" style={{
                    cursor: "pointer",
                  }}>
        <img src={imgUrl} 
        alt={title}
        className="proj-img"
        style={{
          height: "200px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
        />
        <div className="proj-txtx" style={{color:"white"}}  >
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      </a>
    </Col>
  )
}
