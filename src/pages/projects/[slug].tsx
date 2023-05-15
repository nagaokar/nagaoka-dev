import { Post } from "@/lib/ContentDatabase";
import Spacer from "@/components/Spacer";

interface ProjectProps {
  postData: Post;
}

const Project: React.FC<ProjectProps> = ({ postData }) => {
  return (
    <>
      <div className="flex flex-col h-content">
        <div className="flex text-5xl -rotate-2 m-3">
          <p>{postData?.title}</p>
        </div>
      </div>
      <div className="flex text-3xl h-content">
        <p>{postData?.organisation}</p>
      </div>
      <div className="flex flex-col h-full justify-center">
        <div className="text-xl text-red-500 text-center my-3">
          <p>{postData?.date}</p>
        </div>
        <Spacer />
        <div className="flex text-xl my-2">
          <p>{postData?.desc}</p>
        </div>
        <Spacer />
        <div className="flex">
          <a
            className="hover:underline"
            href={postData?.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {postData?.link}
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
