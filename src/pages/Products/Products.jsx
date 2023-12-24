import './Products.scss'
import Product from "./Product/Product";
import useProducts from "../hooks/useProducts";
const Products = () => {
  const [products] = useProducts();
//   const [products, setProducts] = useState([])
//   useEffect(() => {
//     fetch('http://localhost:5000/products')
//         .then(res => res.json())
//         .then(data => setProducts(data))
// }, []);
  return (
    <div className="products-container">
      <h1 className="sec-heading">Section Product</h1>
      <div className="products">
       {
        products.map(product => <Product
        key={product._id}
        product={product}
        ></Product>)
       }
      </div>
    </div>
  );
};

export default Products;