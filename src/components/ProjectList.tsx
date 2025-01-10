import React from 'react';

interface Project {
  name: string;
  description: string;
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => (
  <ul className="list-disc pl-5 text-gray-700 list-none">
    {projects.map((project, index) => (
      <li key={index}>
        <strong>{project.name}:</strong> {project.description}
      </li>
    ))}
  </ul>
);

export default ProjectList;

