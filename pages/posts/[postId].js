import Link from "next/link";
import { useRouter } from "next/router";

const postDetails = ({ post }) => {
// start for fallback true
  const router = useRouter();
  if(router.isFallback){
    return <h2 className="text-2xl">Loading...</h2>
  }
// end falback true
  return (
    <div>
      <h2 className="text-3xl my-8">
        {post.id} {post.title}
      <p>{post.title}</p>
      <button className="btn">
      <Link href={'/posts'}> Go to posts pages</Link>
      </button>
      </h2>
      <hr/>
    </div>
  );
};
export default postDetails;
export const getStaticPaths = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const paths = data.map( post => {
        return{
            params:{
                postId:`${post.id}`
            }
        }
    })
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
};
