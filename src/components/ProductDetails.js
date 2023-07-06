import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProductById,
  removeSelectedProduct,
} from '../redux/products/productsSlice';

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selectedProduct);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(fetchProductById(productId));

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="product-details" data-testid="productDetailPage">
      <Link className="links" to="/">
        <h2>Back to Home</h2>
      </Link>
      {product ? (
        <div className="details-container">
          <div className="headings">
            <h2>{product.title}</h2>
            <div className="rating">
              <h3>
                Price: $
                {product.price}
              </h3>
            </div>
          </div>
          <div className="product-main">
            <img src={product.image} alt="" />
            <div className="right-section">
              <p>{product.description}</p>
              <div className="product-categories">
                <span key={product.category}><b>{product.category}</b></span>
              </div>
              <button type="button" className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      ) : (
        <div>Product not found.</div>
      )}
    </div>
  );
};

export default ProductDetails;
