import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import moment from 'moment'
import { Link } from "react-router-dom";

const shortDateFormat = 'MM/DD/YYYY';
const longDateFormat = 'MM/DD/YYYY hh:mm a';

const Product = ({ product, onDelete }) => {
  const receiptDate = product.receiptDate ? moment(product.receiptDate).format(shortDateFormat) : '-';
  const expirationDate = product.expirationDate ? moment(product.expirationDate).format(shortDateFormat) : '-';
  const createdAt = product.createdAt ? moment(product.createdAt).format(longDateFormat) : '-';

  return (
    <tbody>
      <tr>
        <td><Link to={`/edit/${product.id}`}>{product.name}</Link></td>
        <td>{product.brand}</td>
        <td>{product.rating}</td>
        <td>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input"
              checked={product.rating > 8 ? true : false}
              onChange={() => { return }} />
          </div>
          { }</td>
        <td>{product.itemsInStock}</td>
        <td>
          <ul>
            {product.categories.map(category => (
              <li key={category.id}>{category.name}</li>
            ))}
          </ul>
        </td>
        <td>{receiptDate}</td>
        <td>{expirationDate}</td>
        <td>{createdAt}</td>
        <td><Button close onClick={() => onDelete(product.id)} /></td>
      </tr>
    </tbody>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Product;
