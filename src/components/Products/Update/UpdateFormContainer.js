import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getProductById } from '../../../reducers/products';
import ProductForm from './ProductForm';
import { Link } from 'react-router-dom';
import { updateProductForm } from '../../../actions/products';

function UpdateFormContainer({ productId }) {
    const dispatch = useDispatch()
    const { categories } = useSelector(state => state)
    const { products } = useSelector(state => state)
    const product = getProductById({ products }, productId)
    if (!product) {
        return null;
    }
    return (
        <>
            <Link to='/'>Home</Link>
            <ProductForm
                onSave={(data) => dispatch(updateProductForm(product.id, data))}
                product={product}
                categories={categories}
            />
        </>
    );
}
UpdateFormContainer.propTypes = {
    product: PropTypes.object,
    categories: PropTypes.array,
    history: PropTypes.object,
};

export default UpdateFormContainer;
