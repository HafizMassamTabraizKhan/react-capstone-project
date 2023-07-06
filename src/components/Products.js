import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../redux/products/productsSlice';

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
    <>
      <div className="search">
        <input
          className="input"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by category"
          value={search}
        />
      </div>
      <div className="products-container">
        <div className="products-grid">
          {products
            .filter((product) => {
              if (search === '') {
                return product;
              }
              if (product.category.toLowerCase().includes(search.toLowerCase())) {
                return product;
              }
              return null;
            })
            .map((product, index) => (
              <div className={`products-item ${index % 2 === 0 ? 'background-1' : 'background-2'}`} key={product.id}>
                <img src={product.image} alt="" />
                <h3>{product.title}</h3>
                <div className="price-category">
                  <p>{product.category}</p>
                  <p>
                    $
                    {product.price}
                  </p>
                </div>
                <div className="view-more">
                  <span>Click for more info</span>
                  <Link to={`/product/${product.id}`}><BsArrowRightCircle /></Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Products;
