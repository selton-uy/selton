import { useState } from "react";
import projects from "../data/projects.json";
import AccordionProjects from "../components/AccordionProjects";

const ProjectList = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    projects.map((project) => (
      <AccordionProjects
        key={project.id}
        projectName={project.title}
        description={project.description}
        img={project.image}
        link={project.url}
        isExpanded={expanded === project.title}
        handleChange={handleChange}
      />
    ))
  );
};

export default ProjectList;
