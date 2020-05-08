import React from 'react';
import PropTypes from 'prop-types';

function Products({products}) {
  return (
    <div className='product-list'>
      {
        products.map((product) => (
          <div className="card" style={{width: '18rem'}} key={product.id}>
            <img className="card-img-top" src={product['product-image-url']} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{product['product-name']}</h5>
                <p className="card-text">{product['header-top-right-text']}</p>
                <a href="#" className="btn btn-primary">Add to cart</a>
              </div>
          </div>
        ))
      }
    </div>
  );
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Products;
