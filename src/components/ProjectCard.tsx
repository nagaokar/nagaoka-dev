import React, { useState } from "react";
import { Post } from "@/lib/ContentDatabase";
import Popup from "./Popup";
import ProjectPage from "@/pages/project/ProjectPage";
import PostImage from "./PostImage";

interface ProjectCardProps {
  project: Post;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section id="projectCardContainer" className="flex flex-col md:flex-row flex-wrap justify-center">
      <button
        className="p-2 border-2 border-black m-3"
        onClick={openPopup}
      >
        <div
          id={`project${project.id}Card`}
          className="w-52 md:w-64 h-64 flex flex-col m-5 p-5 lowercase justify-center"
        >
          <div className="flex flex-col">
            <PostImage key={project.id} post={project} />
          </div>

          <div className="flex flex-col justify-center text-center">
            <p className="font-bold text-lg">{project.organisation}</p>
          </div>
          <div className="flex flex-col justify-start text-center text-lg">
            <p>{project.title}</p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <p className="text-sm opacity-30 mt-2">{project.date}</p>
          </div>
        </div>
      </button>

      {isPopupOpen && (
        <Popup onClick={closePopup}>
          <ProjectPage project={project} />
        </Popup>
      )}
    </section>
  );
};

export default ProjectCard;
