import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'word-guessing-game',
      description: 'Interactive Front-End Application',
      link: "https://github.com/SeanAllen19/Word-Guessing-Game",
      repo: "https://github.com/SeanAllen19/Word-Guessing-Game"
    },
    {
      name: 'git-ideas',
      description: 'MERN Stack',
      link: "https://github.com/SeanAllen19/GIT-IDEAS",
      repo: "https://github.com/SeanAllen19/GIT-IDEAS"
    },
    {
      name: 'scororama',
      description: 'MERN Stack',
      link: "https://github.com/SeanAllen19/Scororama",
      repo: "https://github.com/SeanAllen19/Scororama"
    },
    
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
