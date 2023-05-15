import { getAllPostSlugs, getPostBySlug, Post } from "@/lib/ContentDatabase";
import Spacer from "@/components/Spacer";

export interface ProjectProps {
  post: Post;
}

export async function getStaticPaths() {
  const slugs = getAllPostSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const postData = await getPostBySlug(params?.slug as string);

  return {
    props: {
      post: postData,
    },
  }
}

export default function Project({ post }: ProjectProps) {
  return (
    <>
      <div className="flex flex-col h-content">
        <div className="flex text-5xl -rotate-2 m-3">
          <p>{post.title}</p>
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
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {post.link}
          </a>
        </div>
      </div>
    </>
  );
}




