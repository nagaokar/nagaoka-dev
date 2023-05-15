import { GetStaticPaths, GetStaticProps } from "next";
import { Post, getAllPosts } from "@/lib/ContentDatabase";
import Spacer from "@/components/Spacer";

interface ProjectPageProps {
  project: Post;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  return (
    <>
    <div className="flex flex-col h-content">
        <div className="flex text-5xl -rotate-2 m-3">
          <p >{project.title}</p>
        </div>
    </div>
        <div className="flex text-3xl h-content">
          <p>{project.organisation}</p>
        </div>
      <div className="flex flex-col h-full justify-center">
        <div className="text-xl text-red-500 text-center my-3">
          <p>{project.date}</p>
        </div>
        <Spacer />
        <div className="flex text-xl my-2">
          <p>{project.desc}</p>
        </div>
        <Spacer />
        <div className="flex">
          <a
            className="hover:underline"
            href={project.link} target="_blank" rel="noopener noreferrer">
            {project.link}
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(); // Fetch all the project data
  const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));
  return {
    paths,
    fallback: false, // Return 404 for non-existent paths
  };
};

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({ params }) => {
  const id = Number(params?.id);
  const posts = getAllPosts(); // Fetch all the project data
  const project = posts.find((post) => post.id === id);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};