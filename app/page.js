"use client";
import { useEffect, useState } from "react";
import Product from "./Product";

export default function Products() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div>
      <h1 className="text-center text-2xl p-4 m-2">View All Products</h1>
      <div className="grid grid-rows-4 grid-flow-col gap-2">
        {products ? (
          products.map((product) => <Product data={product} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
