import Link from "next/link";
const index = ({ posts }) => {
  return (
    <div>
      <h2 className="text-2xl">Post Length:{posts.length} </h2>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post?.id}`}>
              <h2 className="text-3xl">
                {post.id} {post.title}
              </h2>
            </Link>
            <p>{post.body}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
export default index;
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
};
