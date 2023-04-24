import Link from "next/link";
import { useRouter } from "next/router";

const productDetails = ({product }) => {

  return (
    <div>
      <h2 className="text-3xl my-8">
        {product.id} {product.title}
      <p>{product.body}</p>
      <button className="btn">
      <Link href={'/products'}> Go to product pages</Link>
      </button>
      </h2>
      <hr/>
    </div>
  );
};
export default productDetails;

export const getStaticPaths = async () => {
    return {
      paths:[
        {
            params:{productId:'1'},
        },
        {
            params:{productId:'2'},
        },
        {
            params:{productId:'3'},
        },
    ],
      fallback: false,
    };
  };

export const getStaticProps = async (context) => {
    const { params } = context;
    const response = await fetch(
      `http://localhost:4000/products/${params?.productId}`
    );
    const data = await response.json();
  
    return {
      props: {
        product: data,
      },
    };
  };

