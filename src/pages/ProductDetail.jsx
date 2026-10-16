import { useLoaderData } from "react-router";
import { urlFor } from "../lib/sanityClient";

const ProductDetail = () => {
  const { product } = useLoaderData();

  return (
    <div className="container py-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a className="breadcrumb-link" href="#">
              Home
            </a>
          </li>
          <li className="breadcrumb-divider">›</li>
          <li className="breadcrumb-item">
            <a className="breadcrumb-link" href="#">
              Shop
            </a>
          </li>
          <li className="breadcrumb-divider">›</li>
          <li className="breadcrumb-item" aria-current="page">
            <a className="breadcrumb-link " href="#">
              Men
            </a>
          </li>
          <li className="breadcrumb-divider">›</li>
          <li className="breadcrumb-item" aria-current="page">
            <a className="breadcrumb-link active" href="#">
              T-shirts
            </a>
          </li>
        </ol>
      </nav>
      <h1>{product.name}</h1>
      
      {product.image && <img src={urlFor(product.image).width(600).url()} alt={product.name} />}
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
