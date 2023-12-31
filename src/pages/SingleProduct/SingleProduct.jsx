import { CgShoppingCart } from "react-icons/cg";
import "./SingleProduct.scss";
import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
const SingleProduct = () => {
  const {productId} = useParams();
  const [product] = useProduct(productId);
  console.log(product)
  return (
    <div className='single-product-main-content'>
      <div className='layout'>
     <div className="single-product-page">
     <div className='left'>
        <img src="" alt=""/>
      </div>
      <div className='right'>
      <span className='name'>{product.name}</span>
      <span className=''>price</span>
      <span className='desc'>desc</span>
      <div className='cart-buttons'>
      <div className='quantity-buttons'>
      <span>-</span>
      <span>5</span>
      <span>+</span>
      </div>
      <button className="add-to-cart-button">
      <CgShoppingCart size={20} />
        ADD TO CART
      </button>
      </div>
      </div>
     </div>
      </div>
    </div>
  );
};

export default SingleProduct;