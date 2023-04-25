import Image from "next/image";
import Link from "next/link";

const productList = ({ products }) => {
  return (
    <>
      <section>
        {products.map((product) => {
          return (
            <div key={product.id} className="hero min-h-screen bg-base-100">
              <div className={`hero-content flex-col lg:${product.id == 2 ? "flex-row" : "flex-row-reverse"}`
              }>
                <Link href={`/products/${product?.id}`}>
                  <Image
                    className="max-w-sm rounded-lg shadow-2xl"
                    src={product.image}
                    width={350}
                    height={250}
                  />
                </Link>
                <div>
                  <Link href={`/products/${product?.id}`}>
                    <h1 className="text-5xl font-bold"> {product.title} </h1>
                  </Link>
                  <p className="py-6">{product.body}</p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
    // <div>
    //   <h2 className="text-2xl">Post Length:{products.length} </h2>
    //   {products.map((product) => {
    //     return (
    //       <div key={product?.id}>
    //         <Link href={`/products/${product?.id}`}>
    //           <h2 className="text-3xl">
    //             {product.id} {product.title}
    //           </h2>
    //           <Image src={product.image} width={350} height={250} />
    //         </Link>
    //         <p>{product.body}</p>
    //         <hr />
    //       </div>
    //     );
    //   })}
    // </div>
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
