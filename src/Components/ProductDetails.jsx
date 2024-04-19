import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <h2 className="mt-4 mb-3">Product Details</h2>
        </div>
        <div className="col-auto">
          <Link to={`/`} className="btn btn-primary">
            All Products
          </Link>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <p className="card-text ">
            <span className="fw-bold"> Name: </span>
            {product.name}
          </p>
          <p className="card-text">
            <span className="fw-bold">Description:</span> {product.description}
          </p>
          <p className="card-text">
            <span className="fw-bold">Price:</span> $ {product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
