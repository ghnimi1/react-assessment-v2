import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductForm from '../Update/ProductForm';
import { createProductForm } from '../../../actions/products';

function AddFormContainer(props) {
    const dispatch = useDispatch()
    const { categories } = useSelector(state => state)
    return (
        <>
            <Link to='/'>Home</Link>
            <ProductForm
                onSave={(data) => dispatch(createProductForm(data))}
                categories={categories}
            />
        </>
    );
}
AddFormContainer.propTypes = {
    categories: PropTypes.array,
};
export default AddFormContainer;