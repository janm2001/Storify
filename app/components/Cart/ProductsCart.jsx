import React from "react";
import Image from "next/image";

const ProductsCart = ({ data }) => {
  const { id, title, price, image } = data;
  return (
    <div
      key={id}
      className="card flex  justify-between p-10 bg-white rounded-lg shadow-2xl h-1/6"
    >
      <div className="flex flex-column md:flex-row items-center text-gray-900 p-2">
        <h2 className="text-2xl uppercase text-gray-900 font-bold">{title}</h2>
        <p className="font-bold text-xl">{price} $</p>
      </div>

      <div className="w-1/4 h-1/5">
        <Image src={image} alt={title} width={150} height={100} />
      </div>
    </div>
  );
};

export default ProductsCart;
