"use client";

import { useEffect, useState } from "react";
import ProductsCart from "../components/Cart/ProductsCart";

export default function Cart() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    setCarts(JSON.parse(localStorage.getItem("cart")));
  }, []);

  console.log(carts);

  return (
    <div>
      {carts.length > 0 ? (
        carts.map((cart) => <ProductsCart data={cart} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
