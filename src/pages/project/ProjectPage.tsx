import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { Post, getAllPosts } from "@/lib/ContentDatabase";

interface ProjectPageProps {
  project: Post;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  return (
    <div className="lowercase">
      <p>{project.title}</p>
      <p>{project.organisation}</p>
      <p>{project.date}</p>
      <p>{project.desc}</p>
      <p>{project.link}</p>
    </div>
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