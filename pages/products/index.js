import Link from "next/link";
const productList = ({ products }) => {
  return (
    <div>
      <h2 className="text-2xl">Post Length:{products.length} </h2>
      {products.map((product) => {
        return (
          <div key={product?.id}>
            <Link href={`/products/${product?.id}`}>
              <h2 className="text-3xl">
                {product.id} {product.title}
              </h2>
            </Link>
            <p>{product.body}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
export default productList;
export const getStaticProps = async () => {
  const response = await fetch("http://localhost:4000/products/");
  const data = await response.json();
  return {
    props: {
      products: data,
    },
  };
};
