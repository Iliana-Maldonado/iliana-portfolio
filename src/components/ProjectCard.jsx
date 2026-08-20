function ProjectCard({ project, onClick }) {
  return (
    <article className="project-card" onClick={onClick}>
      <div className="project-card-image">
        <img
          src={project.image}
          alt={project.title}
        />
      </div>

      <div className="project-card-content">
        <span className="project-card-year">
          {project.year}
        </span>

        <h3>{project.title}</h3>

        <p className="project-card-type">
          {project.type}
        </p>

        <p className="project-card-category">
          {project.category}
        </p>
      </div>
    </article>
  );
}

export default ProjectCard;