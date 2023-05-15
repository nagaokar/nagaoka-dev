import React, { useState } from "react";
import { useRouter } from "next/router";
import { Post } from "@/lib/ContentDatabase";
import Popup from "@/components/Popup";
import Project from "@/pages/projects/[slug]";
import PostImage from "@/components/PostImage";

interface ProjectCardProps {
  post: Post;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ post, index }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const router = useRouter();

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleProjectClick = () => {
    router.push(`/project/${post.slug}`);
  };

  return (
    <section
      id="projectCardContainer"
      className="flex flex-col md:flex-row flex-wrap justify-center"
    >
      <button
        className="p-2 border-2 border-black m-3"
        onClick={handleProjectClick}
      >
        <div
          id={`project${post.id}Card`}
          className="w-52 md:w-64 h-64 flex flex-col m-5 p-5 lowercase justify-center"
        >
          <div className="flex flex-col">
            <PostImage key={post.id} post={post} />
          </div>

          <div className="flex flex-col justify-center text-center">
            <p className="font-bold text-lg">{post.organisation}</p>
          </div>
          <div className="flex flex-col justify-start text-center text-lg">
            <p>{post.title}</p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <p className="text-sm opacity-30 mt-2">{post.date}</p>
          </div>
        </div>
      </button>

      {isPopupOpen && (
        <Popup onClick={closePopup}>
          <Project postData={post} />
        </Popup>
      )}
    </section>
  );
};

export default ProjectCard;
