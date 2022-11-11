import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import ProductsList from './ProductsList';
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../../actions/products';
import { getCategoriesById } from '../../reducers/categories';

function ProductsContainer(props) {
  const dispatch = useDispatch()
  const { products } = useSelector(state => state)
  const { categories } = useSelector(state => state)
  const categoriesById = getCategoriesById(categories);
  const productsList = products?.map(product => {
    const categories = product.categories?.map(id => categoriesById[id])
    return {
      ...product,
      categories
    };
  });
  return (
    <Fragment>
      <Header name="Products" />
      <ProductsList products={productsList} onDelete={(id) => dispatch(deleteProduct(id))} />
    </Fragment>
  );

}
ProductsContainer.propTypes = {
  products: PropTypes.array,
  dispatch: PropTypes.func,
};
export default ProductsContainer;