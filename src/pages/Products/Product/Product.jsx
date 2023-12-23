import './Product.scss';

const Product = ({product}) => {
  const {img, id, name, price} = product;

  return (
    <div className='product-card'>
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