import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import { Container } from 'reactstrap'
import { chunk } from 'lodash'

const ProductList = ({ products, onDelete }) => {
  const productsGroups = chunk(products, 3)

  return (
    <Container>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Brand</th>
            <th scope="col">Rating</th>
            <th scope="col">Featured</th>
            <th scope="col">In Stock</th>
            <th scope="col">Categories</th>
            <th scope="col">Receipt Date</th>
            <th scope="col">Expiration Date</th>
            <th scope="col">Created At</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {productsGroups.map((productsGroup, index) => (
          <Fragment key={index}>
            {productsGroup.map(product => (
              <Product product={product} onDelete={onDelete} key={product.id} />
            ))}
          </Fragment>
        ))
        }
      </table>
    </Container >
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ProductList;
