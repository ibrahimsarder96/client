import { useNavigate } from 'react-router-dom';
import './Product.scss';

const Product = ({product}) => {
  const {img, _id, name, price} = product;

    
  const navigate = useNavigate();
  const navigateToProductDetail = id => {
    navigate(`/product/${id}`)
  }

  return (
    <div className='product-card' onClick={ () => navigateToProductDetail(_id)}>
      <div className='thumbnail'>
      <img src={img} alt=""/>
      </div>
      <div className='product-details'>
        <span className='name'>{name}</span>
        <span className='price'>$ {price}</span>
      </div>
    </div>
  );
};

export default Product;