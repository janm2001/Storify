import React, { useState } from "react";
import Image from "next/image";

const Product = ({ data }) => {
  const { id, title, price, image } = data;
  const [cart, setCart] = useState([]);

  const handleAddToCart = () => {
    const updatedCart = [
      ...cart,
      {
        id,
        title,
        price,
        image,
      },
    ];

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div
      key={id}
      className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl "
    >
      <h2 className="text-2xl uppercase text-gray-900 font-bold">{title}</h2>
      <div className="flex items-center justify-center h-5/6">
        <Image src={image} width={300} height={200} alt={title} />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-900 p-2">
        <p className="font-bold text-xl">{price} $</p>
        <button
          onClick={handleAddToCart}
          className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
