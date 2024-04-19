import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleDelete = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      axios
        .delete(`http://127.0.0.1:8000/api/products/${productId}`, {
          data: { id: productId },
        })
        .then(() => {
          setProducts(products.filter((item) => item.id !== productId));
        })
        .catch((error) => {
          console.error("Error :", error);
        });
    }
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="mt-4 mb-3">Products List</h1>
          <Link to="/add-product" className="btn btn-info">
            Add Product
          </Link>
        </div>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="btn btn-danger "
                  >
                    Delete
                  </button>
                  <Link
                    to={`/view-product/${product.id}`}
                    className="btn btn-primary mx-2"
                  >
                    View
                  </Link>
                  <Link
                    to={`/edit-product/${product.id}`}
                    className="btn btn-primary"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductList;
