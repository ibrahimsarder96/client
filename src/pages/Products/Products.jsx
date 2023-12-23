import { useEffect, useState } from "react";
import './Products.scss'
import Product from "./Product/Product";
const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data))
}, []);
  return (
    <div className="products-container">
      <h1 className="sec-heading">Section Product</h1>
      <div className="products">
       {
        products.map(product => <Product
        key={product.id}
        product={product}
        ></Product>)
       }
      </div>
    </div>
  );
};

export default Products;