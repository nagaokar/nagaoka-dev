import React, { useState } from "react";
import Image from "next/image";
import { Post } from "@/lib/ContentDatabase";
import placeholder from '../icons/undraw/undraw_coffee.svg'
import Popup from "./Popup";
import ProjectPage from "@/pages/project/ProjectPage";

interface ProjectCardProps {
  project: Post;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div
        id={`project${project.id}Card`}
        className="m-4 w-48 flex flex-col justify-start "
      >
        <button onClick={openPopup}>
          <Image src={placeholder} width={200} height={200} alt="" />
          <div className="flex flex-col text-start my-2 lowercase">
            <p className="text-sm">{project.date}</p>
            <p>{project.title}</p>
          </div>
        </button>
      </div>

      {isPopupOpen && (
        <Popup onClick={closePopup}>
          <ProjectPage project={project} />
        </Popup>
      )}
    </>
  );
};

export default ProjectCard;
