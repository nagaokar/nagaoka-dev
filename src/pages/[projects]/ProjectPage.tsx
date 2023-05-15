import { GetStaticPaths, GetStaticProps } from "next";
import { Post, getAllPosts } from "@/lib/ContentDatabase";
import Spacer from "@/components/Spacer";
import { useRouter } from "next/router";


interface ProjectPageProps {
  post: Post;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ post }) => {
  const router = useRouter();
  const { post } = router.query;
  return (
    <>
    <div className="flex flex-col h-content">
        <div className="flex text-5xl -rotate-2 m-3">
          <p >{post.title}</p>
        </div>
    </div>
        <div className="flex text-3xl h-content">
          <p>{post.organisation}</p>
        </div>
      <div className="flex flex-col h-full justify-center">
        <div className="text-xl text-red-500 text-center my-3">
          <p>{post.date}</p>
        </div>
        <Spacer />
        <div className="flex text-xl my-2">
          <p>{post.desc}</p>
        </div>
        <Spacer />
        <div className="flex">
          <a
            className="hover:underline"
            href={post.link} target="_blank" rel="noopener noreferrer">
            {post.link}
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
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};