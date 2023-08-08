import React from "react";
import { useFetchProjects } from "../fetch/fetchProject";

const Projects = () => {
  const [projects, loading] = useFetchProjects();

  if (loading) {
    return (
      <section>
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>制作物一覧</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, title, url, imageUrl } = project;
          return (
            <a href={url} key={id} target="_blank" className="project">
              <img src={imageUrl} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
