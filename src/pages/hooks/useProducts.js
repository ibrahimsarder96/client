import { useEffect, useState } from "react"

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect( () => {
    const url = "https://shopserver-chi.vercel.app/products";
    fetch(url)
    .then(res => res.json())
    .then(data => setProducts(data))
  },[]);
  return [products, setProducts];
}

export default useProducts;